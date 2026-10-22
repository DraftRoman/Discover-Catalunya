import { describe, expect, it } from "vitest"
import { getAllCountries, getCountry } from "./countries"

describe("countries data", () => {
    it("returns the known countries", () => {
        const ids = getAllCountries().map((country) => country.id)
        expect(ids).toEqual(["spain", "canada"])
    })

    it("looks up a country by id", () => {
        const spain = getCountry("spain")
        expect(spain?.name).toBe("Spain")
        expect(spain?.status).toBe("available")
    })

    it("returns undefined for an unknown or missing id", () => {
        expect(getCountry("atlantis")).toBeUndefined()
        expect(getCountry(undefined)).toBeUndefined()
    })

    it("wires each country's region lookups to its own data", () => {
        const spain = getCountry("spain")
        const canada = getCountry("canada")

        expect(spain?.getRegion("catalonia")?.name).toBe("Catalunya")
        expect(spain?.getRegion("on")).toBeUndefined()
        expect(canada?.getRegion("on")?.name).toBe("Ontario")
    })
})
