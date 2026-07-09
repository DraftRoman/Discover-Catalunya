import marker from "../assets/marker.jpg"

const DEFAULT_AIRPORT = { name: "Barcelona-El Prat Airport", code: "BCN" }

export default function DetailedEntry(props) {
    const airport = props.airport || DEFAULT_AIRPORT
    const airportOrigin = airport.code ? `${airport.name} (${airport.code})` : airport.name
    const destination = `${props.title}, ${props.country}`
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(airportOrigin)}&destination=${encodeURIComponent(destination)}`
    const directionsEmbedSrc = `https://maps.google.com/maps?saddr=${encodeURIComponent(airportOrigin)}&daddr=${encodeURIComponent(destination)}&output=embed`

    return (
        <article className="detailed-entry">
            <button className="back-btn" onClick={props.onBackClick}>
                ← Back to Explorations
            </button>

            <div className="detailed-hero-image">
                <img src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="detailed-info">
                <div className="location-row">
                    <img className="marker" src={marker} alt="map marker" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink} class="maps-link" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                </div>

                <h1 className="detailed-title">{props.title}</h1>
                <p className="detailed-full-text">{props.text}</p>

                {props.distance && <p className="detailed-location">Location: {props.distance}</p>}

                {props.ticketInfo && (
                    <div className="detailed-ticketInfo">
                        <p>{props.ticketInfo}</p>
                        {props.ticketUrl && (
                            <a
                                className="buy-tickets-btn"
                                href={props.ticketUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy Tickets →
                            </a>
                        )}
                    </div>
                )}

                <div className="airport-directions">
                    <h2 className="airport-directions-title">Getting There from {airport.name}{airport.code ? ` (${airport.code})` : ""}</h2>
                    <div className="airport-directions-map">
                        <iframe
                            title={`Directions from ${airport.name} to ${props.title}`}
                            src={directionsEmbedSrc}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <a
                        className="airport-directions-link"
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open directions in Google Maps →
                    </a>
                </div>
            </div>
        </article>
    )
}