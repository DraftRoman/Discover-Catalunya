import ontario from "./ontario"
import quebec from "./quebec"
import britishColumbia from "./british-columbia"
import type { Region } from "../types"

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

const regionExtras: Record<string, Pick<Region, "airport" | "entries">> = {
    on: { airport: { name: "Toronto Pearson International Airport", code: "YYZ" }, entries: ontario },
    qc: { airport: { name: "Montréal-Trudeau International Airport", code: "YUL" }, entries: quebec },
    bc: { airport: { name: "Vancouver International Airport", code: "YVR" }, entries: britishColumbia },
}

const regionsById: Record<string, Region> = Object.fromEntries(
    regionList.map((region) => [region.id, { ...region, ...regionExtras[region.id] }])
)

export function getRegion(id: string | undefined): Region | undefined { return id ? regionsById[id] : undefined }
export function getAllRegions(): Region[] { return regionList.map((region) => regionsById[region.id]) }
export default regionsById
