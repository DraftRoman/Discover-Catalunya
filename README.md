# Discover Catalunya (Discover World)

A travel-guide single-page app. Pick a country, click a region on an SVG map, and
browse curated sights with photos, ticket links, opening hours, and driving
directions from the nearest airport. Despite the repo name, the app has grown
into a multi-country "Discover World" explorer (currently Spain and Canada).

## Tech stack

- **React 19** + **React Router 7** (`BrowserRouter`, nested `:countryId/:regionId/:entryId` routes)
- **Vite 8** (`@vitejs/plugin-react`) as the dev server/bundler
- **TypeScript**, fully migrated — the whole app is `.ts`/`.tsx`, with shared
  `Country`/`Region`/`Entry`/`Airport` types in `src/types.ts`
- **@svg-maps/spain** and **@svg-maps/canada** for the clickable region map
  (`src/components/CountryMap.tsx`, driven generically by each country's map data)
- **ESLint 9** (flat config) with `eslint-plugin-react-hooks` / `react-refresh`
- Plain CSS (`index.css`, `src/App.css`) — no CSS framework or CSS-in-JS
- `express`, `pg`, and `cors` are already listed as dependencies but are **not
  used anywhere yet** — they're the groundwork for the backend described below

## Getting started

```bash
npm install
npm run dev         # start the Vite dev server
npm run build       # production build to dist/
npm run preview     # serve the production build locally
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run test        # vitest run
```

Tests use [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react)
(config in `vitest.config.ts`, shared setup in `src/test/setup.ts`). Test
files sit next to the code they cover as `*.test.ts(x)`:
`src/data/countries.test.ts` and `src/data/regions.test.ts` (data lookups and
the lazy entry loader), `src/pages/CountryHome.test.tsx`,
`src/pages/RegionPage.test.tsx` and `src/pages/Home.test.tsx` (not-found/
coming-soon/loading/detail branches of the main pages),
`src/components/CountryMap.test.tsx` (click/keyboard region selection), and
`src/components/DetailedEntry.test.tsx` (airport-directions link/embed
construction).

CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, and build on
every push to `master` and on pull requests.

## How the app is organized

- **`src/data/`** — the entire content catalog as typed TS modules, one file
  per region (`catalunya.ts`, `madrid.ts`, `andalucia.ts`, ...), aggregated by
  `regions.ts` (Spain) and `canada-regions.ts` (Canada). `countries.ts` is the
  top-level registry: each country entry wires together its SVG map data
  (`@svg-maps/*`), its synchronous `getRegion`/`getAllRegions` lookups (id,
  name, status, airport — no entries), and a `loadRegionEntries(id)` function
  that dynamically `import()`s that one region's entries on demand. Adding a
  new region today means adding a new data file, one entry in the relevant
  `regions.ts`-style registry, and one line in its `entryLoaders` map; adding
  a new country means adding a new `@svg-maps` package and an entry in
  `countries.ts`.
- **`src/pages/`** — route-level components: `Home` (country picker),
  `CountryHome` (region map + list for one country), `RegionPage` (entry list,
  or a single entry's detail view, driven by the URL params plus the region's
  lazily-loaded entries, with a brief loading state while they fetch).
- **`src/components/`** — `Header`, `CountryMap` (clickable/keyboard-navigable
  SVG region map, shared by every country), `Entry` (card in a list) and
  `DetailedEntry` (full detail view with embedded Google Maps directions from
  the region's airport).

Content hierarchy is always **country → region → entry**. Region/entry
metadata (name, status) is still static, but each region's entries and each
route's page component are only fetched once they're actually navigated to —
see "Code-splitting" below.

## Code-splitting

The app used to ship one ~565 kB JS bundle with every region's entries and
every page component inlined, regardless of which country/region a visitor
actually opened (`vite build` warned about it). That's fixed at the route and
region level:

- **Routes are lazy.** `App.tsx` wraps `Home`/`CountryHome`/`RegionPage` in
  `React.lazy` + `Suspense`, so each page is its own chunk.
- **Region entries are lazy.** `regions.ts`/`canada-regions.ts` expose a
  `loadRegionEntries(id)` function backed by a per-region `import()` (e.g.
  `() => import("./catalunya")`), instead of eagerly importing every region's
  entries into the data module. `RegionPage` calls it in a `useEffect`,
  showing a brief "Loading {region}…" state (styled via `.region-loading` /
  `.page-loading` in `index.css`) while it resolves. `getRegion`/
  `getAllRegions` stay synchronous and only carry id/name/status/airport, so
  the region list on `CountryHome` never has to wait on this.
- Net result (`npm run build`): the former single bundle is now a handful of
  6–19 kB per-region chunks plus the shared app/vendor code, and each is
  fetched only when that specific region is visited.

What's *not* split yet: each country's `@svg-maps/*` path data (bundled via
`countries.ts`, which is still eagerly imported by every page) — splitting
that per-country would be the next step here, likely once/if content moves to
a real backend (see below), since at that point `countries.ts` stops being a
static registry anyway.

## Scaling and upgrade path

1. **Move content into a real backend.** `express`, `pg`, and `cors` are
   already installed — the natural next step is a small Express API backed by
   Postgres with `countries`, `regions`, and `entries` tables mirroring the
   current `src/data/*.ts` shape, exposing REST endpoints like
   `GET /countries`, `GET /countries/:id/regions`, `GET /regions/:id/entries`.
   This lets non-developers (or a CMS) update content without a code deploy,
   and replaces today's dynamic-`import()`-based splitting (see above) with
   real network fetches.
2. **Fetch data instead of importing it**, once the API exists — add
   TanStack Query (or similar) for caching/loading/error states, and replace
   `loadRegionEntries`'s dynamic `import()` with an actual fetch.
3. **Own the images.** Several entries link directly to third-party CDN URLs
   (news sites, official tourism sites) for photos; those can disappear or
   change at any time. Moving images to owned storage/CDN (with the `.avif`
   format already used for some local assets) would make the content
   reliable and faster.
4. **SEO/pre-rendering.** This is a content site where individual entries
   (e.g. "Park Güell") are the kind of page people search for and land on
   directly, but it's a pure client-side SPA with no per-page `<title>`/meta
   tags. Prerendering routes at build time, or moving to a framework with SSR
   (Next.js/Remix), plus per-entry `<title>`/meta description, would matter a
   lot more here than for a typical internal tool.
5. **Extend CI with deployment.** The existing workflow covers
   lint/typecheck/test/build — add a deploy step (static host like
   Netlify/Vercel/Cloudflare Pages for the frontend; a container for the
   Express API once it exists).
6. **More test coverage.** Data lookups, the lazy entry loader, every page's
   not-found/coming-soon/loading/detail branches, the map's click/keyboard
   interactions, and `DetailedEntry`'s directions-link construction are all
   covered now (see "Getting started" above). Remaining gaps: `Header`,
   `Entry`'s card-click-vs-maps-link-click stop-propagation behavior, and an
   end-to-end check that `App.tsx`'s routes actually render the right lazy
   page.
