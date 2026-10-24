import type { Entry, Region } from "../types"

const regionList: Array<Pick<Region, "id" | "name" | "status">> = [
    { id: "ab", name: "Alberta", status: "soon" },
    { id: "bc", name: "British Columbia", status: "available" },
    { id: "mb", name: "Manitoba", status: "soon" },
    { id: "nb", name: "New Brunswick", status: "soon" },
    { id: "nl", name: "Newfoundland and Labrador", status: "soon" },
    { id: "nt", name: "Northwest Territories", status: "soon" },
    { id: "ns", name: "Nova Scotia", status: "soon" },
    { id: "nu", name: "Nunavut", status: "soon" },
    { id: "on", name: "Ontario", status: "available" },
    { id: "pe", name: "Prince Edward Island", status: "soon" },
    { id: "qc", name: "Québec", status: "available" },
    { id: "sk", name: "Saskatchewan", status: "soon" },
    { id: "yt", name: "Yukon", status: "soon" },
]

const regionAirports: Record<string, Region["airport"]> = {
    on: { name: "Toronto Pearson International Airport", code: "YYZ" },
    qc: { name: "Montréal-Trudeau International Airport", code: "YUL" },
    bc: { name: "Vancouver International Airport", code: "YVR" },
}

// Each loader is its own dynamic import so Vite can chunk a region's entries
// separately, fetched only when that region is visited.
const entryLoaders: Record<string, () => Promise<{ default: Entry[] }>> = {
    on: () => import("./ontario"),
    qc: () => import("./quebec"),
    bc: () => import("./british-columbia"),
}

const regionsById: Record<string, Region> = Object.fromEntries(
    regionList.map((region) => [region.id, { ...region, airport: regionAirports[region.id] }])
)

export function getRegion(id: string | undefined): Region | undefined { return id ? regionsById[id] : undefined }
export function getAllRegions(): Region[] { return regionList.map((region) => regionsById[region.id]) }

export async function loadRegionEntries(id: string | undefined): Promise<Entry[] | undefined> {
    const loader = id ? entryLoaders[id] : undefined
    if (!loader) return undefined
    const module = await loader()
    return module.default
}

export default regionsById
