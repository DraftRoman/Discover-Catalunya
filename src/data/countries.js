import spainMapData from "@svg-maps/spain"
import canadaMapData from "@svg-maps/canada"
import * as spainRegions from "./regions"
import * as canadaRegions from "./canada-regions"

const countryList = [
    {
        id: "spain",
        name: "Spain",
        status: "available",
        mapData: spainMapData,
        getRegion: spainRegions.getRegion,
        getAllRegions: spainRegions.getAllRegions,
    },
    {
        id: "canada",
        name: "Canada",
        status: "available",
        mapData: canadaMapData,
        getRegion: canadaRegions.getRegion,
        getAllRegions: canadaRegions.getAllRegions,
    },
]

const countriesById = Object.fromEntries(countryList.map((country) => [country.id, country]))

export function getCountry(id) { return countriesById[id] }
export function getAllCountries() { return countryList }
export default countriesById
