import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Home from "./Home"

function renderHome() {
    return render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )
}

describe("Home", () => {
    it("shows the world title and subtitle", () => {
        renderHome()
        expect(screen.getByRole("heading", { name: "Discover World" })).toBeInTheDocument()
        expect(screen.getByText(/Pick a country to explore/i)).toBeInTheDocument()
    })

    it("links each available country to its own page", () => {
        renderHome()

        const spainLink = screen.getByRole("link", { name: "Spain" })
        expect(spainLink).toHaveAttribute("href", "/spain")

        const canadaLink = screen.getByRole("link", { name: "Canada" })
        expect(canadaLink).toHaveAttribute("href", "/canada")
    })

    it("lists not-yet-available countries without a link", () => {
        renderHome()

        expect(screen.getByText("France")).toBeInTheDocument()
        expect(screen.queryByRole("link", { name: /France/ })).not.toBeInTheDocument()
        expect(screen.getAllByText("Coming soon").length).toBeGreaterThan(0)
    })
})
