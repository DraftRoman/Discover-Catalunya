import marker from "../assets/marker.jpg"
export default function Entry(props) {
    return (
        <article className="journal-entry">
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
                    <a 
                        className="maps-link" 
                        href={props.googleMapsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>

                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-text">{props.text}</p>
                
                <div className="meta-grid">
                    {props.opening_hours && (
                        <div className="meta-item">
                            <span className="meta-label">Opening Hours</span>
                            <span className="meta-value">{props.opening_hours}</span>
                        </div>
                    )}
                    {props.best_time_to_visit && (
                        <div className="meta-item">
                            <span className="meta-label">Best Time to Visit</span>
                            <span className="meta-value">{props.best_time_to_visit}</span>
                        </div>
                    )}
                    {props.visit_duration && (
                        <div className="meta-item">
                            <span className="meta-label">Duration</span>
                            <span className="meta-value">{props.visit_duration}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}