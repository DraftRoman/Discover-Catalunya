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
- **@svg-maps/spain** and **@svg-maps/canada** for the clickable region maps
  (`src/components/SpainMap.tsx`, `src/components/CountryMap.tsx`)
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
files sit next to the code they cover as `*.test.ts(x)` — see
`src/data/countries.test.ts`, `src/data/regions.test.ts`,
`src/pages/CountryHome.test.tsx`, and `src/pages/RegionPage.test.tsx` for the
current coverage (data lookups, and the not-found/coming-soon/detail branches
of the main pages).

CI (`.github/workflows/ci.yml`) runs lint, typecheck, tests, and build on
every push to `master` and on pull requests.

## How the app is organized

- **`src/data/`** — the entire content catalog as typed TS modules, one file
  per region (`catalunya.ts`, `madrid.ts`, `andalucia.ts`, ...), aggregated by
  `regions.ts` (Spain) and `canada-regions.ts` (Canada). `countries.ts` is the
  top-level registry: each country entry wires together its SVG map data
  (`@svg-maps/*`) and its `getRegion`/`getAllRegions` functions. Adding a new
  region today means adding a new data file and one entry in the relevant
  `regions.ts`-style registry; adding a new country means adding a new
  `@svg-maps` package and an entry in `countries.ts`.
- **`src/pages/`** — route-level components: `Home` (country picker),
  `CountryHome` (region map + list for one country), `RegionPage` (entry list,
  or a single entry's detail view, driven entirely by the URL params).
- **`src/components/`** — `Header`, the two map components, `Entry` (card in a
  list) and `DetailedEntry` (full detail view with embedded Google Maps
  directions from the region's airport).

Content hierarchy is always **country → region → entry**, and every page is
derived purely from `useParams()` plus the static data modules — there's no
client-side state beyond what React Router gives you.

## Scaling and upgrade path

The app currently ships 100% static data in the JS bundle, with content for
every region loaded for every visitor regardless of which country/region they
view. That's fine at today's size but is the main thing to address as more
countries/regions/entries are added.

1. **Move content into a real backend.** `express`, `pg`, and `cors` are
   already installed — the natural next step is a small Express API backed by
   Postgres with `countries`, `regions`, and `entries` tables mirroring the
   current `src/data/*.js` shape, exposing REST endpoints like
   `GET /countries`, `GET /countries/:id/regions`, `GET /regions/:id/entries`.
   This lets non-developers (or a CMS) update content without a code deploy,
   and stops shipping every region's data to every visitor.
2. **Fetch data instead of importing it**, once the API exists — add
   TanStack Query (or similar) for caching/loading/error states, and replace
   the synchronous `getCountry`/`getRegion` lookups with async fetches at the
   page level.
3. **Code-split by route/region.** Even before a backend exists, swap the
   static imports in `regions.ts`/`canada-regions.ts` for `React.lazy` +
   dynamic `import()` per region so Vite can chunk each region's data and
   images separately instead of bundling everything into one chunk.
4. **Grow test coverage.** Vitest + React Testing Library are set up and
   cover the data lookups and the main pages' not-found/coming-soon/detail
   branches (see above). Still worth adding: the `Home` page, the two map
   components' click/keyboard interactions, and `DetailedEntry`'s
   directions-link construction.
5. **Own the images.** Several entries link directly to third-party CDN URLs
   (news sites, official tourism sites) for photos; those can disappear or
   change at any time. Moving images to owned storage/CDN (with the `.avif`
   format already used for some local assets) would make the content
   reliable and faster.
6. **SEO/pre-rendering.** This is a content site where individual entries
   (e.g. "Park Güell") are the kind of page people search for and land on
   directly, but it's a pure client-side SPA with no per-page `<title>`/meta
   tags. Prerendering routes at build time, or moving to a framework with SSR
   (Next.js/Remix), plus per-entry `<title>`/meta description, would matter a
   lot more here than for a typical internal tool.
7. **Extend CI with deployment.** The existing workflow covers
   lint/typecheck/test/build — add a deploy step (static host like
   Netlify/Vercel/Cloudflare Pages for the frontend; a container for the
   Express API once it exists).
