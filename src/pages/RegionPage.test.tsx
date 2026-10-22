import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import RegionPage from "./RegionPage"

function renderAt(path: string) {
    return render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/:countryId/:regionId" element={<RegionPage />} />
                <Route path="/:countryId/:regionId/:entryId" element={<RegionPage />} />
            </Routes>
        </MemoryRouter>
    )
}

describe("RegionPage", () => {
    it("shows a not-found message for an unknown country", () => {
        renderAt("/atlantis/some-region")
        expect(screen.getByText(/couldn't find that country/i)).toBeInTheDocument()
    })

    it("shows a not-found message for an unknown region", () => {
        renderAt("/spain/neverland")
        expect(screen.getByText(/couldn't find that region/i)).toBeInTheDocument()
    })

    it("shows a coming-soon message for a region with no entries yet", () => {
        renderAt("/spain/aragon")
        expect(screen.getByRole("heading", { name: "Aragón" })).toBeInTheDocument()
        expect(screen.getByText(/still researching the best spots/i)).toBeInTheDocument()
    })

    it("lists entries for an available region", () => {
        renderAt("/spain/catalonia")
        expect(screen.getByRole("heading", { name: "Catalunya" })).toBeInTheDocument()
        expect(screen.getByText("Park Güell")).toBeInTheDocument()
    })

    it("shows a not-found message for an unknown entry id", () => {
        renderAt("/spain/catalonia/9999")
        expect(screen.getByText(/couldn't find that location/i)).toBeInTheDocument()
    })

    it("shows the detail view for a known entry", () => {
        renderAt("/spain/catalonia/1")
        expect(screen.getByRole("heading", { name: "Park Güell" })).toBeInTheDocument()
        expect(screen.getByText(/Getting There from/)).toBeInTheDocument()
    })
})
