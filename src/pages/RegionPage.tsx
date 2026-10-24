import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Entry from "../components/Entry"
import DetailedEntry from "../components/DetailedEntry"
import { getCountry } from "../data/countries"
import type { Entry as EntryData } from "../types"

export default function RegionPage() {
    const { countryId, regionId, entryId } = useParams()
    const navigate = useNavigate()
    const country = getCountry(countryId)
    const region = country?.getRegion(regionId)
    const regionKey = region?.status === "available" ? `${countryId}/${regionId}` : undefined

    const [entries, setEntries] = useState<EntryData[] | undefined>(undefined)
    const [loadedRegionKey, setLoadedRegionKey] = useState<string | undefined>(undefined)

    if (regionKey !== loadedRegionKey) {
        setLoadedRegionKey(regionKey)
        setEntries(undefined)
    }

    useEffect(() => {
        if (!country || !regionKey) {
            return
        }

        let cancelled = false

        country.loadRegionEntries(regionId).then((loadedEntries) => {
            if (!cancelled) {
                setEntries(loadedEntries)
            }
        })

        return () => {
            cancelled = true
        }
    }, [country, regionKey, regionId])

    const isLoadingEntries = Boolean(regionKey) && !entries

    if (!country) {
        return (
            <div className="region-page">
                <Link to="/" className="back-btn">← Back to the map</Link>
                <p>We couldn't find that country.</p>
            </div>
        )
    }

    if (!region) {
        return (
            <div className="region-page">
                <Link to={`/${countryId}`} className="back-btn">← Back to the map</Link>
                <p>We couldn't find that region.</p>
            </div>
        )
    }

    if (region.status !== "available") {
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

    if (isLoadingEntries || !entries) {
        return (
            <div className="region-page">
                <Link to={`/${countryId}`} className="back-btn">← Back to the map</Link>
                <h1 className="region-title">{region.name}</h1>
                <p className="region-loading">Loading {region.name}…</p>
            </div>
        )
    }

    const selectedEntry = entryId
        ? entries.find((entry) => String(entry.id) === entryId)
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

    const entryElements = entries.map((entry) => (
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
