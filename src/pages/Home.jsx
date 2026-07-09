import { Link } from "react-router-dom"
import SpainMap from "../components/SpainMap"
import { getAllRegions } from "../data/regions"

export default function Home() {
    const regions = getAllRegions()

    return (
        <div className="home-page">
            <h1 className="home-title">Discover Spain</h1>
            <p className="home-subtitle">
                Click a highlighted region on the map to explore its top sights, tickets, and how to get there
                from the airport. More regions are being added over time.
            </p>

            <SpainMap />

            <ul className="region-list">
                {regions.map((region) => (
                    <li key={region.id}>
                        {region.status === "available" ? (
                            <Link to={`/spain/${region.id}`} className="region-list-link is-available">
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
                    @svg-maps/spain
                </a>{" "}
                (CC BY 4.0).
            </p>
        </div>
    )
}
