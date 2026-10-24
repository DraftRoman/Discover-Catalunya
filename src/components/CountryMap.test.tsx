import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import CountryMap from "./CountryMap"
import { getCountry } from "../data/countries"

const spain = getCountry("spain")!

function renderMap() {
    const { container } = render(
        <MemoryRouter initialEntries={["/spain"]}>
            <Routes>
                <Route path="/spain" element={<CountryMap country={spain} />} />
                <Route path="/spain/:regionId" element={<div>Landed on region page</div>} />
            </Routes>
        </MemoryRouter>
    )
    const paths = Array.from(container.querySelectorAll<SVGPathElement>("path.country-map-region"))
    const findByTitle = (text: string) => paths.find((path) => path.querySelector("title")?.textContent === text)
    return { findByTitle }
}

describe("CountryMap", () => {
    it("marks an available region as a focusable button", () => {
        const { findByTitle } = renderMap()
        const catalonia = findByTitle("Catalunya")

        expect(catalonia).toBeDefined()
        expect(catalonia).toHaveAttribute("role", "button")
        expect(catalonia).toHaveAttribute("tabindex", "0")
        expect(catalonia).toHaveClass("is-available")
    })

    it("leaves a coming-soon region without a role or tab stop", () => {
        const { findByTitle } = renderMap()
        const aragon = findByTitle("Aragón")

        expect(aragon).toBeDefined()
        expect(aragon).not.toHaveAttribute("role")
        expect(aragon).not.toHaveAttribute("tabindex")
        expect(aragon).toHaveClass("is-soon")
    })

    it("navigates to the region page when an available region is clicked", async () => {
        const user = userEvent.setup()
        const { findByTitle } = renderMap()
        const catalonia = findByTitle("Catalunya")!

        await user.click(catalonia)

        expect(await screen.findByText("Landed on region page")).toBeInTheDocument()
    })

    it("navigates when Enter or Space is pressed on a focused available region", () => {
        const { findByTitle } = renderMap()
        const catalonia = findByTitle("Catalunya")!

        fireEvent.keyDown(catalonia, { key: "Enter" })

        expect(screen.getByText("Landed on region page")).toBeInTheDocument()
    })

    it("ignores clicks and key presses on a coming-soon region", async () => {
        const user = userEvent.setup()
        const { findByTitle } = renderMap()
        const aragon = findByTitle("Aragón")!

        await user.click(aragon)
        fireEvent.keyDown(aragon, { key: "Enter" })

        expect(screen.queryByText("Landed on region page")).not.toBeInTheDocument()
    })
})
