import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DetailedEntry from "./DetailedEntry"
import type { Entry } from "../types"

const baseEntry: Entry = {
    id: 1,
    title: "Park Güell",
    country: "Catalunya, Spain",
    img: { src: "https://example.com/park-guell.jpg", alt: "Park Güell" },
    googleMapsLink: "https://maps.app.goo.gl/example",
    best_time_to_visit: "Early morning",
    text: "A famous park designed by Gaudí.",
    opening_hours: "9:30 AM - 7:30 PM",
    visit_duration: "2-3 hours",
    distance: "Inside Barcelona",
    ticketInfo: "Paid entry required.",
    ticketUrl: "https://parkguell.barcelona/en/buy-tickets",
}

describe("DetailedEntry", () => {
    it("builds directions to and from the default airport when none is given", () => {
        render(<DetailedEntry {...baseEntry} onBackClick={() => {}} />)

        const expectedOrigin = encodeURIComponent("Barcelona-El Prat Airport (BCN)")
        const expectedDestination = encodeURIComponent("Park Güell, Catalunya, Spain")

        expect(
            screen.getByRole("heading", { name: /Getting There from Barcelona-El Prat Airport \(BCN\)/ })
        ).toBeInTheDocument()

        const directionsLink = screen.getByRole("link", { name: /Open directions in Google Maps/ })
        expect(directionsLink).toHaveAttribute(
            "href",
            `https://www.google.com/maps/dir/?api=1&origin=${expectedOrigin}&destination=${expectedDestination}`
        )

        const embed = screen.getByTitle(/Directions from Barcelona-El Prat Airport to Park Güell/)
        expect(embed).toHaveAttribute(
            "src",
            `https://maps.google.com/maps?saddr=${expectedOrigin}&daddr=${expectedDestination}&output=embed`
        )
    })

    it("uses the entry's own airport over the default", () => {
        render(
            <DetailedEntry
                {...baseEntry}
                airport={{ name: "Girona Airport", code: "GRO" }}
                onBackClick={() => {}}
            />
        )

        expect(
            screen.getByRole("heading", { name: "Getting There from Girona Airport (GRO)" })
        ).toBeInTheDocument()

        const expectedOrigin = encodeURIComponent("Girona Airport (GRO)")
        expect(screen.getByRole("link", { name: /Open directions in Google Maps/ })).toHaveAttribute(
            "href",
            expect.stringContaining(`origin=${expectedOrigin}`)
        )
    })

    it("omits the ticket button when there is no ticket url", () => {
        render(<DetailedEntry {...baseEntry} ticketUrl={undefined} onBackClick={() => {}} />)

        expect(screen.getByText("Paid entry required.")).toBeInTheDocument()
        expect(screen.queryByRole("link", { name: /Buy Tickets/ })).not.toBeInTheDocument()
    })

    it("calls onBackClick when the back button is clicked", async () => {
        const user = userEvent.setup()
        const onBackClick = vi.fn()
        render(<DetailedEntry {...baseEntry} onBackClick={onBackClick} />)

        await user.click(screen.getByRole("button", { name: /Back to Explorations/ }))

        expect(onBackClick).toHaveBeenCalledTimes(1)
    })
})
