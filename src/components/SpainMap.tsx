import { useNavigate } from "react-router-dom"
import type { KeyboardEvent } from "react"
import spain from "@svg-maps/spain"
import { getAllRegions } from "../data/regions"
import type { Region, SvgMap } from "../types"

const spainMapData = spain as SvgMap

export default function SpainMap() {
    const navigate = useNavigate()
    const regionById: Record<string, Region> = Object.fromEntries(getAllRegions().map((region) => [region.id, region]))

    const goToRegion = (id: string) => navigate(`/spain/${id}`)

    return (
        <svg className="spain-map" viewBox={spainMapData.viewBox} role="img" aria-label={spainMapData.label}>
            {spainMapData.locations.map((location) => {
                const region = regionById[location.id]
                const isAvailable = region?.status === "available"

                return (
                    <path
                        key={location.id}
                        d={location.path}
                        className={`spain-map-region ${isAvailable ? "is-available" : "is-soon"}`}
                        role={isAvailable ? "button" : undefined}
                        tabIndex={isAvailable ? 0 : undefined}
                        onClick={isAvailable ? () => goToRegion(location.id) : undefined}
                        onKeyDown={
                            isAvailable
                                ? (e: KeyboardEvent<SVGPathElement>) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                          e.preventDefault()
                                          goToRegion(location.id)
                                      }
                                  }
                                : undefined
                        }
                    >
                        <title>{region ? region.name : `${location.name} (coming soon)`}</title>
                    </path>
                )
            })}
        </svg>
    )
}
