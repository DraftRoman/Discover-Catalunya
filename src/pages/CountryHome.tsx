import { Link, useParams, Navigate } from "react-router-dom"
import CountryMap from "../components/CountryMap"
import { getCountry } from "../data/countries"

export default function CountryHome() {
    const { countryId } = useParams()
    const country = getCountry(countryId)

    if (!country) {
        return <Navigate to="/" replace />
    }

    const regions = country.getAllRegions()

    return (
        <div className="home-page">
            <Link to="/" className="back-btn">← Back to world</Link>
            <h1 className="home-title">Discover {country.name}</h1>
            <p className="home-subtitle">
                Click a highlighted region on the map to explore its top sights, tickets, and how to get there
                from the airport. More regions are being added over time.
            </p>

            <CountryMap country={country} />

            <ul className="region-list">
                {regions.map((region) => (
                    <li key={region.id}>
                        {region.status === "available" ? (
                            <Link to={`/${country.id}/${region.id}`} className="region-list-link is-available">
                                {region.name}
                            </Link>
                        ) : (
                            <span className="region-list-link is-soon">
                                {region.name} <em>Coming soon</em>
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            <p className="map-attribution">
                Map data from{" "}
                <a href="https://github.com/VictorCazanave/svg-maps" target="_blank" rel="noopener noreferrer">
                    @svg-maps/{country.id}
                </a>{" "}
                (CC BY 4.0).
            </p>
        </div>
    )
}
