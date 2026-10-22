import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import CountryHome from "./CountryHome"

function renderAt(path: string) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/:countryId" element={<CountryHome />} />
            </Routes>
        </MemoryRouter>
    )
}

describe("CountryHome", () => {
    it("lists the available and coming-soon regions for a country", () => {
        renderAt("/spain")
        expect(screen.getByRole("heading", { name: "Discover Spain" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Catalunya" })).toBeInTheDocument()
        expect(screen.getAllByText("Aragón").length).toBeGreaterThan(0)
        expect(screen.getAllByText("Coming soon").length).toBeGreaterThan(0)
    })

    it("redirects home for an unknown country", () => {
        renderAt("/atlantis")
        expect(screen.getByText("Home")).toBeInTheDocument()
    })
})
