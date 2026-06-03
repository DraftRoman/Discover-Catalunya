import { useState } from "react"
import Header from "./components/Header"
import Entry from "./components/Entry"
import DetailedEntry from "./components/DetailedEntry"
import data from "../data"

export default function App() {
    // State to track which entry is currently selected (null means no selection)
    const [selectedEntryId, setSelectedEntryId] = useState<number | null>(null)
    const selectedEntry = data.find(entry => entry.id === selectedEntryId)

    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
                onCardClick={() => setSelectedEntryId(entry.id)}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {selectedEntry ? (
                    <DetailedEntry 
                        {...selectedEntry} 
                        onBackClick={() => setSelectedEntryId(null)} 
                    />
                ) : (
                    <div className="entries-list">
                        {entryElements}
                    </div>
                )}
            </main>
        </>
    )
}