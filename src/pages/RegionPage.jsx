import { useParams, useNavigate, Link } from "react-router-dom"
import Entry from "../components/Entry"
import DetailedEntry from "../components/DetailedEntry"
import { getRegion } from "../data/regions"

export default function RegionPage() {
    const { regionId, entryId } = useParams()
    const navigate = useNavigate()
    const region = getRegion(regionId)

    if (!region) {
        return (
            <div className="region-page">
                <Link to="/" className="back-btn">← Back to the map</Link>
                <p>We couldn't find that region.</p>
            </div>
        )
    }

    if (region.status !== "available" || !region.entries) {
        return (
            <div className="region-page coming-soon-page">
                <Link to="/" className="back-btn">← Back to the map</Link>
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
                <Link to={`/spain/${regionId}`} className="back-btn">← Back to {region.name}</Link>
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
                    onBackClick={() => navigate(`/spain/${regionId}`)}
                />
            </div>
        )
    }

    const entryElements = region.entries.map((entry) => (
        <Entry
            key={entry.id}
            {...entry}
            onCardClick={() => navigate(`/spain/${regionId}/${entry.id}`)}
        />
    ))

    return (
        <div className="region-page">
            <Link to="/" className="back-btn">← Back to the map</Link>
            <h1 className="region-title">{region.name}</h1>
            <div className="entries-list">{entryElements}</div>
        </div>
    )
}
