import { Link } from "react-router-dom"
import { getAllCountries } from "../data/countries"

const comingSoonCountries = [
    { id: "france", name: "France" },
    { id: "italy", name: "Italy" },
    { id: "japan", name: "Japan" },
    { id: "united-states", name: "United States" },
]

export default function Home() {
    const countries = getAllCountries()

    return (
        <div className="home-page">
            <h1 className="home-title">Discover World</h1>
            <p className="home-subtitle">
                Pick a country to explore its regions, top sights, tickets, and how to get there from the
                airport. More countries are being added over time.
            </p>

            <ul className="country-list">
                {countries.map((country) => (
                    <li key={country.id}>
                        <Link to={`/${country.id}`} className="country-card is-available">
                            {country.name}
                        </Link>
                    </li>
                ))}
                {comingSoonCountries.map((country) => (
                    <li key={country.id}>
                        <span className="country-card is-soon">
                            {country.name} <em>Coming soon</em>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
