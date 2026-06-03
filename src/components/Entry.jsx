import marker from "../assets/marker.jpg"
export default function Entry(props) {
    return (
        <article className="journal-entry" onClick={props.onCardClick} style={{ cursor: 'pointer' }}>
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <div className="location-row">
                    <img 
                        className="marker"
                        src={marker} 
                        alt="map marker icon"
                    />
                    <span className="country">{props.country}</span>
                    {/* stopPropagation prevents card click firing when clicking direct maps links */}
                    <a 
                        className="maps-link" 
                        href={props.googleMapsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View on Google Maps
                    </a>
                </div>

                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-text">{props.text.substring(0, 140)}...</p>
                
                <span className="read-more-btn">Explore Location →</span>
            </div>
        </article>
    )
}