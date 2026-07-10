const data = [
  {
    "id": 1,
    "title": "Catedral de Mallorca (La Seu)",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Palma_de_Mallorca_Catedral_La_Seu_07.JPG",
      "alt": "Gothic seafront facade of La Seu cathedral in Palma de Mallorca"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Catedral+de+Mallorca+La+Seu%2C+Palma",
    "best_time_to_visit": "Early morning in winter, when sunrise light through the rose window casts colored patterns across the nave floor.",
    "text": "Rising directly from the sea wall of Palma's old town, this soaring Gothic cathedral was famously remodeled inside by Antoni Gaudí. Its rose window is one of the largest in the world, and the roof terraces (open seasonally) offer sweeping views over the bay.",
    "opening_hours": "Mon-Fri 10:00 AM - 5:15 PM, Sat 10:00 AM - 2:15 PM (hours vary seasonally). Closed Sundays to tourist visits.",
    "visit_duration": "1-1.5 hours.",
    "distance": "Located in central Palma, about 8km from Palma de Mallorca Airport (PMI).",
    "ticketInfo": "Paid admission includes the Museum of Sacred Art. Rooftop terrace access is a separate guided tour, available May-October only.",
    "ticketUrl": "https://catedraldemallorca.org/en/"
  },
  {
    "id": 2,
    "title": "Coves del Drac (Cuevas del Drach)",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Les_Coves_del_Drach,_Porto_Cristo,_Mallorca,_Espa%C3%B1a.JPG",
      "alt": "Stalactites and underground lake inside the Caves of Drach in Mallorca"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Coves+del+Drac%2C+Porto+Cristo",
    "best_time_to_visit": "Any time of day — the caves maintain a constant cool temperature year-round, so mornings help you beat the busiest tour groups.",
    "text": "A stunning network of four connected caves winds past forests of stalactites and stalagmites down to Lake Martel, one of the largest underground lakes in the world. Visits end with a small live classical music ensemble performing on illuminated boats gliding across the lake.",
    "opening_hours": "Guided tours run several times daily; check the official timetable, which varies by season.",
    "visit_duration": "1 hour.",
    "distance": "Located in Porto Cristo, Manacor, about 65km from Palma de Mallorca Airport (PMI).",
    "ticketInfo": "Paid admission required, including the lake concert and boat crossing. Book in advance online, especially in peak season.",
    "ticketUrl": "https://www.cuevasdeldrach.com/en/venta-entradas.php"
  },
  {
    "id": 3,
    "title": "Valldemossa",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Campanar_cartoxa_Valldemosa.jpg",
      "alt": "Bell tower of the Royal Carthusian Monastery in Valldemossa"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Valldemossa%2C+Mallorca",
    "best_time_to_visit": "Weekday mornings, before day-trip buses from Palma fill the narrow stone streets.",
    "text": "This impossibly picturesque mountain village of stone houses and geranium-lined balconies once hosted composer Frédéric Chopin and writer George Sand, who wintered at its Carthusian monastery in 1838-39. The Real Cartuja remains its centerpiece attraction today.",
    "opening_hours": "Village open access. Real Cartuja monastery: roughly 10:00 AM - 5:00/6:30 PM depending on season, closed Sundays.",
    "visit_duration": "Half day.",
    "distance": "Located in Valldemossa, about 25km from Palma de Mallorca Airport (PMI).",
    "ticketInfo": "The village streets are free to explore. The Real Cartuja monastery requires paid admission."
  },
  {
    "id": 4,
    "title": "Sa Calobra & Torrent de Pareis",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cala_sa_Calobra,_Escorca,_Mallorca,_Espa%C3%B1a.JPG",
      "alt": "Rocky cove and turquoise water at Sa Calobra on Mallorca's northwest coast"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Sa+Calobra%2C+Mallorca",
    "best_time_to_visit": "Morning, both to beat the tour-bus crowds on the famously twisting access road and to catch calmer water for swimming.",
    "text": "A dramatic pebble cove at the mouth of the Tramuntana mountains, reached via one of the most spectacular (and vertigo-inducing) hairpin roads in Spain. From the cove, a walk through the narrow Torrent de Pareis gorge leads into a hidden canyon carved through the mountains.",
    "opening_hours": "Open access; road can close temporarily in bad weather.",
    "visit_duration": "Half day.",
    "distance": "Located on Mallorca's northwest coast, about 60km from Palma de Mallorca Airport (PMI).",
    "ticketInfo": "Free public cove and trail. Parking near the cove charges a fee in peak season."
  },
  {
    "id": 5,
    "title": "Dalt Vila, Ibiza",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Dalt_Vila.JPG",
      "alt": "Fortified walls and whitewashed old town of Dalt Vila in Ibiza Town"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Dalt+Vila%2C+Ibiza",
    "best_time_to_visit": "Sunset, when the Renaissance walls glow and the terraces near the cathedral fill for views over the port.",
    "text": "Ibiza Town's UNESCO-listed fortified old quarter climbs a hill in tight, whitewashed lanes behind massive 16th-century Renaissance walls. Far removed from the island's club scene, it's a quiet maze of galleries, boutiques, and a hilltop cathedral.",
    "opening_hours": "Old town open access. Ibiza Cathedral: roughly 10:00 AM - 1:30 PM & 5:00 PM - 8:00 PM, hours vary seasonally.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in Ibiza Town, about 6km from Ibiza Airport (IBZ).",
    "airport": { "name": "Ibiza Airport", "code": "IBZ" },
    "ticketInfo": "Free to walk the old town and walls. The cathedral and some museums charge small admission fees."
  },
  {
    "id": 6,
    "title": "Es Trenc",
    "country": "Illes Balears, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Es_Trenc.JPG",
      "alt": "White sand and turquoise water at Es Trenc beach in Mallorca"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Es+Trenc%2C+Mallorca",
    "best_time_to_visit": "Early morning in shoulder season (May, June, or September) to see the Caribbean-like water before the crowds arrive.",
    "text": "Widely considered Mallorca's finest beach, this protected stretch of blinding-white sand and shallow turquoise water backs onto salt flats and dunes with no highrise development in sight — a rarity on the island's developed coastline.",
    "opening_hours": "Open access year-round.",
    "visit_duration": "Half day to full day.",
    "distance": "Located near Campos, southern Mallorca, about 45km from Palma de Mallorca Airport (PMI).",
    "ticketInfo": "Free public beach. Parking near the access points charges a fee in summer."
  }
]
export default data
