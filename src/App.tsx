import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import RegionPage from "./pages/RegionPage"

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/spain/:regionId" element={<RegionPage />} />
                    <Route path="/spain/:regionId/:entryId" element={<RegionPage />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
