import { useParams, useNavigate, Link } from "react-router-dom"
import Entry from "../components/Entry"
import DetailedEntry from "../components/DetailedEntry"
import { getCountry } from "../data/countries"

export default function RegionPage() {
    const { countryId, regionId, entryId } = useParams()
    const navigate = useNavigate()
    const country = getCountry(countryId)

    if (!country) {
        return (
            <div className="region-page">
                <Link to="/" className="back-btn">← Back to the map</Link>
                <p>We couldn't find that country.</p>
            </div>
        )
    }

    const region = country.getRegion(regionId)

    if (!region) {
        return (
            <div className="region-page">
                <Link to={`/${countryId}`} className="back-btn">← Back to the map</Link>
                <p>We couldn't find that region.</p>
            </div>
        )
    }

    if (region.status !== "available" || !region.entries) {
        return (
            <div className="region-page coming-soon-page">
                <Link to={`/${countryId}`} className="back-btn">← Back to the map</Link>
                <h1 className="region-title">{region.name}</h1>
                <p className="coming-soon-text">
                    We're still researching the best spots in {region.name}. Check back soon!
                </p>
            </div>
        )
    }

    const selectedEntry = entryId
        ? region.entries.find((entry) => String(entry.id) === entryId)
        : null

    if (entryId && !selectedEntry) {
        return (
            <div className="region-page">
                <Link to={`/${countryId}/${regionId}`} className="back-btn">← Back to {region.name}</Link>
                <p>We couldn't find that location.</p>
            </div>
        )
    }

    if (selectedEntry) {
        return (
            <div className="region-page">
                <DetailedEntry
                    {...selectedEntry}
                    airport={selectedEntry.airport || region.airport}
                    onBackClick={() => navigate(`/${countryId}/${regionId}`)}
                />
            </div>
        )
    }

    const entryElements = region.entries.map((entry) => (
        <Entry
            key={entry.id}
            {...entry}
            onCardClick={() => navigate(`/${countryId}/${regionId}/${entry.id}`)}
        />
    ))

    return (
        <div className="region-page">
            <Link to={`/${countryId}`} className="back-btn">← Back to the map</Link>
            <h1 className="region-title">{region.name}</h1>
            <div className="entries-list">{entryElements}</div>
        </div>
    )
}
