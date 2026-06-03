import marker from "../assets/marker.jpg"
export default function DetailedEntry(props) {
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
                
                {props.ticketInfo && <p className="detailed-ticketInfo">{props.ticketInfo}</p>}
                
                
            </div>
        </article>
    )
}