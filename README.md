# Discover Catalunya (Discover World)

A travel-guide single-page app. Pick a country, click a region on an SVG map, and
browse curated sights with photos, ticket links, opening hours, and driving
directions from the nearest airport. Despite the repo name, the app has grown
into a multi-country "Discover World" explorer (currently Spain and Canada).

## Tech stack

- **React 19** + **React Router 7** (`BrowserRouter`, nested `:countryId/:regionId/:entryId` routes)
- **Vite 8** (`@vitejs/plugin-react`) as the dev server/bundler
- **TypeScript** is configured (`tsconfig`, `@types/*`) but the codebase is mostly
  plain `.jsx` today — only `src/App.tsx` and `src/main.tsx` are `.tsx`
- **@svg-maps/spain** and **@svg-maps/canada** for the clickable region maps
  (`src/components/SpainMap.jsx`, `src/components/CountryMap.jsx`)
- **ESLint 9** (flat config) with `eslint-plugin-react-hooks` / `react-refresh`
- Plain CSS (`index.css`, `src/App.css`) — no CSS framework or CSS-in-JS
- `express`, `pg`, and `cors` are already listed as dependencies but are **not
  used anywhere yet** — they're the groundwork for the backend described below

## Getting started

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint       # ESLint
```

There is no test runner configured yet.

Note: `index.html` loads `/index.jsx` (the root-level entry file) directly —
`src/main.tsx` is unused leftover from the Vite template and can be deleted
once that's confirmed, to avoid two competing entry points.

## How the app is organized

- **`src/data/`** — the entire content catalog as plain JS modules, one file
  per region (`catalunya.js`, `madrid.js`, `andalucia.js`, ...), aggregated by
  `regions.js` (Spain) and `canada-regions.js` (Canada). `countries.js` is the
  top-level registry: each country entry wires together its SVG map data
  (`@svg-maps/*`) and its `getRegion`/`getAllRegions` functions. Adding a new
  region today means adding a new data file and one entry in the relevant
  `regions.js`-style registry; adding a new country means adding a new
  `@svg-maps` package and an entry in `countries.js`.
- **`src/pages/`** — route-level components: `Home` (country picker),
  `CountryHome` (region map + list for one country), `RegionPage` (entry list,
  or a single entry's detail view, driven entirely by the URL params).
- **`src/components/`** — `Header`, the two map components, `Entry` (card in a
  list) and `DetailedEntry` (full detail view with embedded Google Maps
  directions from the region's airport).
- **`data.js`** at the repo root is a backwards-compatibility re-export of
  `src/data/catalunya.js`; nothing imports it anymore and it can be removed.
- **`diagram.json`** at the repo root is unrelated leftover data (a language
  vocabulary dataset) — nothing in the app references it.

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
   static imports in `regions.js`/`canada-regions.js` for `React.lazy` +
   dynamic `import()` per region so Vite can chunk each region's data and
   images separately instead of bundling everything into one chunk.
4. **Finish the TypeScript migration.** The tooling is already in place
   (`tsconfig.json`, `@types/react`, `typescript-eslint`); only `App`/`main`
   have been converted. Typing the data shape (`Country`, `Region`, `Entry`)
   would catch the kind of missing-field bugs that are easy to introduce
   across a dozen hand-written region data files.
5. **Add tests.** There's no test runner yet — Vitest + React Testing Library
   is the natural fit for a Vite project, starting with the routing/lookup
   logic in `data/*.js` and the not-found/coming-soon branches in
   `CountryHome`/`RegionPage`.
6. **Own the images.** Several entries link directly to third-party CDN URLs
   (news sites, official tourism sites) for photos; those can disappear or
   change at any time. Moving images to owned storage/CDN (with the `.avif`
   format already used for some local assets) would make the content
   reliable and faster.
7. **SEO/pre-rendering.** This is a content site where individual entries
   (e.g. "Park Güell") are the kind of page people search for and land on
   directly, but it's a pure client-side SPA with no per-page `<title>`/meta
   tags. Prerendering routes at build time, or moving to a framework with SSR
   (Next.js/Remix), plus per-entry `<title>`/meta description, would matter a
   lot more here than for a typical internal tool.
8. **CI.** Add a GitHub Actions workflow running `npm run lint` (and tests,
   once added) on PRs, and deploy `dist/` to a static host (Netlify/Vercel/
   Cloudflare Pages) — or containerize the Express API separately once it
   exists.
9. **Housekeeping** as part of any of the above: remove the dead
   `src/main.tsx` or root `index.jsx` (pick one entry point), the unused root
   `data.js` shim, and the unrelated `diagram.json`.
