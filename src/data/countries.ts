import spainMapData from "@svg-maps/spain"
import canadaMapData from "@svg-maps/canada"
import * as spainRegions from "./regions"
import * as canadaRegions from "./canada-regions"
import type { Country, SvgMap } from "../types"

const countryList: Country[] = [
    {
        id: "spain",
        name: "Spain",
        status: "available",
        mapData: spainMapData as SvgMap,
        getRegion: spainRegions.getRegion,
        getAllRegions: spainRegions.getAllRegions,
    },
    {
        id: "canada",
        name: "Canada",
        status: "available",
        mapData: canadaMapData as SvgMap,
        getRegion: canadaRegions.getRegion,
        getAllRegions: canadaRegions.getAllRegions,
    },
]

const countriesById: Record<string, Country> = Object.fromEntries(
    countryList.map((country) => [country.id, country])
)

export function getCountry(id: string | undefined): Country | undefined {
    return id ? countriesById[id] : undefined
}
export function getAllCountries(): Country[] { return countryList }
export default countriesById
