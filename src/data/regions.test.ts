import { describe, expect, it } from "vitest"
import { getAllRegions, getRegion, loadRegionEntries } from "./regions"

describe("spain regions data", () => {
    it("includes both available and coming-soon regions", () => {
        const regions = getAllRegions()
        expect(regions.some((region) => region.status === "available")).toBe(true)
        expect(regions.some((region) => region.status === "soon")).toBe(true)
    })

    it("attaches an airport to available regions but defers their entries", () => {
        const catalonia = getRegion("catalonia")
        expect(catalonia?.status).toBe("available")
        expect(catalonia?.airport?.code).toBe("BCN")
        expect(catalonia?.entries).toBeUndefined()
    })

    it("returns undefined for an unknown or missing id", () => {
        expect(getRegion("neverland")).toBeUndefined()
        expect(getRegion(undefined)).toBeUndefined()
    })

    it("lazy-loads entries for an available region", async () => {
        const entries = await loadRegionEntries("catalonia")
        expect(entries?.length).toBeGreaterThan(0)
        expect(entries?.[0].title).toBe("Park Güell")
    })

    it("resolves to undefined for a coming-soon or unknown region", async () => {
        expect(await loadRegionEntries("aragon")).toBeUndefined()
        expect(await loadRegionEntries("neverland")).toBeUndefined()
        expect(await loadRegionEntries(undefined)).toBeUndefined()
    })
})
