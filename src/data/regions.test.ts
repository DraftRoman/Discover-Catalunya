import { describe, expect, it } from "vitest"
import { getAllRegions, getRegion } from "./regions"

describe("spain regions data", () => {
    it("includes both available and coming-soon regions", () => {
        const regions = getAllRegions()
        expect(regions.some((region) => region.status === "available")).toBe(true)
        expect(regions.some((region) => region.status === "soon")).toBe(true)
    })

    it("attaches entries and an airport to available regions", () => {
        const catalonia = getRegion("catalonia")
        expect(catalonia?.status).toBe("available")
        expect(catalonia?.airport?.code).toBe("BCN")
        expect(catalonia?.entries?.length).toBeGreaterThan(0)
    })

    it("leaves coming-soon regions without entries", () => {
        const aragon = getRegion("aragon")
        expect(aragon?.status).toBe("soon")
        expect(aragon?.entries).toBeUndefined()
    })

    it("returns undefined for an unknown or missing id", () => {
        expect(getRegion("neverland")).toBeUndefined()
        expect(getRegion(undefined)).toBeUndefined()
    })
})
