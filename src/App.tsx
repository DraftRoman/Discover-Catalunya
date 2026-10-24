import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"

const Home = lazy(() => import("./pages/Home"))
const CountryHome = lazy(() => import("./pages/CountryHome"))
const RegionPage = lazy(() => import("./pages/RegionPage"))

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="container">
                <Suspense fallback={<p className="page-loading">Loading…</p>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:countryId" element={<CountryHome />} />
                        <Route path="/:countryId/:regionId" element={<RegionPage />} />
                        <Route path="/:countryId/:regionId/:entryId" element={<RegionPage />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </Suspense>
            </main>
        </BrowserRouter>
    )
}
