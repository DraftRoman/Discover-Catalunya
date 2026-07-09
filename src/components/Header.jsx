import { Link } from "react-router-dom"
import globe from "../assets/globe_avif.avif"

export default function Header() {
    return (
        <header>
            <Link to="/" className="header-home-link">
                <img src={globe} alt="globe icon" />
                <h1>Discover Spain</h1>
            </Link>
        </header>
    )
}
