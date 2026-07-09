import { useNavigate } from "react-router-dom"
import spain from "@svg-maps/spain"
import { getAllRegions } from "../data/regions"

export default function SpainMap() {
    const navigate = useNavigate()
    const regionById = Object.fromEntries(getAllRegions().map((region) => [region.id, region]))

    const goToRegion = (id) => navigate(`/spain/${id}`)

    return (
        <svg className="spain-map" viewBox={spain.viewBox} role="img" aria-label={spain.label}>
            {spain.locations.map((location) => {
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
                                ? (e) => {
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
