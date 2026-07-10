import { useNavigate } from "react-router-dom"

export default function CountryMap({ country }) {
    const navigate = useNavigate()
    const regions = country.getAllRegions()
    const regionById = Object.fromEntries(regions.map((region) => [region.id, region]))
    const goToRegion = (id) => navigate(`/${country.id}/${id}`)

    return (
        <svg className="country-map" viewBox={country.mapData.viewBox} role="img" aria-label={country.mapData.label}>
            {country.mapData.locations.map((location) => {
                const region = regionById[location.id]
                const isAvailable = region?.status === "available"
                return (
                    <path
                        key={location.id}
                        d={location.path}
                        className={`country-map-region ${isAvailable ? "is-available" : "is-soon"}`}
                        role={isAvailable ? "button" : undefined}
                        tabIndex={isAvailable ? 0 : undefined}
                        onClick={isAvailable ? () => goToRegion(location.id) : undefined}
                        onKeyDown={isAvailable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goToRegion(location.id) } } : undefined}
                    >
                        <title>{region ? region.name : `${location.name} (coming soon)`}</title>
                    </path>
                )
            })}
        </svg>
    )
}
