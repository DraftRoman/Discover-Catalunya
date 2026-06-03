import globe from "../assets/globe_avif.avif";

export default function Header() {
    return (
        <header>
            <img src={globe} alt="globe icon" />
            <h1>Discover Catalunya</h1>
        </header>
    )
}