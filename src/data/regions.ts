import type { Entry, Region } from "../types"

const regionList: Array<Pick<Region, "id" | "name" | "status">> = [
  { id: "andalusia", name: "Andalucía", status: "available" },
  { id: "aragon", name: "Aragón", status: "soon" },
  { id: "asturias", name: "Asturias", status: "soon" },
  { id: "balearic-islands", name: "Illes Balears", status: "available" },
  { id: "basque-country", name: "Euskadi", status: "available" },
  { id: "canary-islands", name: "Islas Canarias", status: "soon" },
  { id: "cantabria", name: "Cantabria", status: "soon" },
  { id: "castile-and-leon", name: "Castilla y León", status: "available" },
  { id: "castile-la-mancha", name: "Castilla-La Mancha", status: "soon" },
  { id: "catalonia", name: "Catalunya", status: "available" },
  { id: "extremadura", name: "Extremadura", status: "soon" },
  { id: "galicia", name: "Galicia", status: "available" },
  { id: "la-rioja", name: "La Rioja", status: "soon" },
  { id: "madrid", name: "Madrid", status: "available" },
  { id: "murcia", name: "Murcia", status: "soon" },
  { id: "navarre", name: "Navarra", status: "soon" },
  { id: "valencia", name: "Comunitat Valenciana", status: "available" },
]

const regionAirports: Record<string, Region["airport"]> = {
  andalusia: { name: "Málaga-Costa del Sol Airport", code: "AGP" },
  catalonia: { name: "Barcelona-El Prat Airport", code: "BCN" },
  madrid: { name: "Adolfo Suárez Madrid-Barajas Airport", code: "MAD" },
  valencia: { name: "Valencia Airport", code: "VLC" },
  "basque-country": { name: "Bilbao Airport", code: "BIO" },
  galicia: { name: "Santiago-Rosalía de Castro Airport", code: "SCQ" },
  "castile-and-leon": { name: "Adolfo Suárez Madrid-Barajas Airport", code: "MAD" },
  "balearic-islands": { name: "Palma de Mallorca Airport", code: "PMI" },
}

// Each loader is its own dynamic import so Vite can chunk a region's entries
// (and any assets they pull in) separately, fetched only when that region is visited.
const entryLoaders: Record<string, () => Promise<{ default: Entry[] }>> = {
  andalusia: () => import("./andalucia"),
  catalonia: () => import("./catalunya"),
  madrid: () => import("./madrid"),
  valencia: () => import("./valencia"),
  "basque-country": () => import("./basque-country"),
  galicia: () => import("./galicia"),
  "castile-and-leon": () => import("./castile-and-leon"),
  "balearic-islands": () => import("./balearic-islands"),
}

const regionsById: Record<string, Region> = Object.fromEntries(
  regionList.map((region) => [region.id, { ...region, airport: regionAirports[region.id] }])
)

export function getRegion(id: string | undefined): Region | undefined {
  return id ? regionsById[id] : undefined
}

export function getAllRegions(): Region[] {
  return regionList.map((region) => regionsById[region.id])
}

export async function loadRegionEntries(id: string | undefined): Promise<Entry[] | undefined> {
  const loader = id ? entryLoaders[id] : undefined
  if (!loader) return undefined
  const module = await loader()
  return module.default
}

export default regionsById
