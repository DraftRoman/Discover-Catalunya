const data = [
  {
    "id": 1,
    "title": "Alhambra & Generalife",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/The_whole_Alhambra_Granada_Spain.jpg",
      "alt": "The Alhambra palace and fortress complex overlooking Granada"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Alhambra%2C+Granada",
    "best_time_to_visit": "Early morning entry slot, and stay through late afternoon when the low sun lights up the Nasrid Palaces' carved stucco.",
    "text": "This sprawling Moorish palace-fortress overlooking Granada is one of the finest surviving examples of Islamic architecture in the world. Its intricately carved Nasrid Palaces, the fortified Alcazaba, and the Generalife's terraced gardens draw visitors from across the globe.",
    "opening_hours": "8:30 AM - 6:00 PM (mid-Oct to Mar), 8:30 AM - 8:00 PM (Apr to mid-Oct). Closed Dec 25 and Jan 1.",
    "visit_duration": "3-4 hours.",
    "distance": "Located in Granada, about 15km from Federico García Lorca Granada-Jaén Airport (GRX).",
    "airport": { "name": "Federico García Lorca Granada-Jaén Airport", "code": "GRX" },
    "ticketInfo": "Paid entry required. Entry to the Nasrid Palaces is a strict timed slot — arriving late means losing access. Tickets sell out weeks ahead in peak season, so book well in advance via the official site.",
    "ticketUrl": "https://tickets.alhambra-patronato.es/en/"
  },
  {
    "id": 2,
    "title": "Mirador de San Nicolás",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra_Granada_Mirador_san_Nicolas.jpg",
      "alt": "View of the Alhambra and Sierra Nevada from Mirador de San Nicolás"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Mirador+de+San+Nicol%C3%A1s%2C+Granada",
    "best_time_to_visit": "Sunset, when the Alhambra glows red-gold against the snow-capped Sierra Nevada behind it.",
    "text": "Tucked into Granada's whitewashed Albaicín quarter, this small square delivers what's arguably the single best postcard view of the Alhambra, framed by the Sierra Nevada mountains beyond. Buskers and impromptu flamenco often fill the evening air.",
    "opening_hours": "Open public space, accessible at all times.",
    "visit_duration": "30-45 minutes.",
    "distance": "Located in the Albaicín, Granada, about 17km from Federico García Lorca Granada-Jaén Airport (GRX).",
    "airport": { "name": "Federico García Lorca Granada-Jaén Airport", "code": "GRX" },
    "ticketInfo": "Free public viewpoint."
  },
  {
    "id": 3,
    "title": "Mezquita-Catedral de Córdoba",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Mezquita-catedral_de_C%C3%B3rdoba_interior_17.jpg",
      "alt": "Red and white striped arches inside the Mezquita of Córdoba"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Mezquita+de+C%C3%B3rdoba",
    "best_time_to_visit": "Opening time on a weekday morning, before tour groups fill the famous hall of arches — or the free early-morning entry window.",
    "text": "A forest of over 850 red-and-white striped double arches fills this former Great Mosque of Córdoba, with a Renaissance cathedral nave audaciously built into its center in the 16th century. It's one of the most extraordinary fusions of Islamic and Christian architecture anywhere.",
    "opening_hours": "Hours vary by season and day; generally Mon-Sat 10:00 AM - 7:00 PM, Sun and holidays with restricted morning access. Check the official site before visiting.",
    "visit_duration": "1.5-2 hours.",
    "distance": "Located in central Córdoba; the nearest major airport is Seville Airport (SVQ), about 140km away.",
    "airport": { "name": "Seville Airport", "code": "SVQ" },
    "ticketInfo": "Paid entry required for the main monument. The Bell Tower climb and the 'Alma de Córdoba' night visit are separate paid experiences. Book timed tickets in advance.",
    "ticketUrl": "https://mezquita-catedraldecordoba.es/en/organiza-la-visita/entradas-y-horarios/"
  },
  {
    "id": 4,
    "title": "Medina Azahara",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/P%C3%B3rtico_de_Medina_Azahara_(C%C3%B3rdoba,_Spain).jpg",
      "alt": "Ruins of the Caliphate-era palace city of Medina Azahara"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Medina+Azahara%2C+C%C3%B3rdoba",
    "best_time_to_visit": "Morning, to explore the ruins before the midday heat and with the clearest light for photos.",
    "text": "The excavated remains of a vast 10th-century palace-city built by the Caliph of Córdoba, once one of the most sophisticated cities in the world before being destroyed in a civil war. A UNESCO World Heritage Site and a haunting, little-crowded counterpart to the Mezquita.",
    "opening_hours": "Tue-Sat 9:00 AM - 6:30 PM (varies seasonally), Sun 9:00 AM - 3:30 PM. Closed Mondays.",
    "visit_duration": "2-3 hours including the visitor center.",
    "distance": "Located about 8km west of Córdoba; nearest major airport is Seville Airport (SVQ), about 140km away.",
    "airport": { "name": "Seville Airport", "code": "SVQ" },
    "ticketInfo": "Nominal entry fee (free for EU citizens), but a mandatory shuttle bus from the visitor centre is booked separately. Reserve your entry time slot online in advance.",
    "ticketUrl": "https://www.medinaazahara.org/en/tickets-medina-azahara.html"
  },
  {
    "id": 5,
    "title": "Real Alcázar de Sevilla",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Real_Alc%C3%A1zar_-_Seville_-_Patio_de_la_Monteria_-_Palacio_Mud%C3%A9jar_(14549226828).jpg",
      "alt": "Ornate Mudéjar courtyard of the Real Alcázar in Seville"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Real+Alc%C3%A1zar+de+Sevilla",
    "best_time_to_visit": "First entry slot of the day to have the Mudéjar palace rooms to yourself before tour groups arrive.",
    "text": "A dazzling royal palace still in use by the Spanish royal family today, the Alcázar blends Mudéjar, Gothic, and Renaissance styles across centuries of expansion. Its palm-filled gardens and horseshoe-arched courtyards famously stood in for Dorne in Game of Thrones.",
    "opening_hours": "Daily 9:30 AM - 5:00 PM (Oct-Mar), 9:30 AM - 7:00 PM (Apr-Sep).",
    "visit_duration": "2-3 hours.",
    "distance": "Located in central Seville, about 12km from Seville Airport (SVQ).",
    "airport": { "name": "Seville Airport", "code": "SVQ" },
    "ticketInfo": "Paid entry required. Free entry on Monday evenings with advance online reservation (very limited availability). Book official timed tickets ahead.",
    "ticketUrl": "https://alcazarsevilla.org/"
  },
  {
    "id": 6,
    "title": "Plaza de España, Sevilla",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Plaza_de_Espa%C3%B1a_(Sevilla)_-_01.jpg",
      "alt": "Semicircular Plaza de España building and canal in Seville"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Plaza+de+Espa%C3%B1a%2C+Sevilla",
    "best_time_to_visit": "Golden hour, when the tiled bridges and canal glow and the crowds thin out.",
    "text": "Built for the 1929 Ibero-American Exposition, this monumental semicircular plaza combines Renaissance and Moorish Revival styles around a tiled canal spanned by ornate bridges. Its alcoves depict every Spanish province in painted tile murals.",
    "opening_hours": "Open public space, accessible 24 hours (buildings not open to the public).",
    "visit_duration": "1 hour.",
    "distance": "Located in central Seville (María Luisa Park), about 13km from Seville Airport (SVQ).",
    "airport": { "name": "Seville Airport", "code": "SVQ" },
    "ticketInfo": "Free public plaza. Rowing boats on the canal can be rented for a small fee."
  },
  {
    "id": 7,
    "title": "Caminito del Rey",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Caminito_del_Rey_4.jpg",
      "alt": "Narrow walkway of the Caminito del Rey clinging to a gorge wall"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey%2C+Ardales",
    "best_time_to_visit": "Spring or autumn mornings, avoiding the exposed midday summer heat on the walkway.",
    "text": "A vertigo-inducing boardwalk bolted to the sheer walls of the El Chorro gorge, a hundred meters above the Guadalhorce river. Once dubbed 'the world's most dangerous walkway' before a 2015 renovation, it's now a thrilling but secure one-way hike through dramatic limestone scenery.",
    "opening_hours": "Varies seasonally, typically 9:30 AM - 5:00 PM (last entry), closed Mondays in low season.",
    "visit_duration": "3-4 hours including transport between entry and exit points.",
    "distance": "Located near Ardales/El Chorro, Málaga province, about 55km from Málaga-Costa del Sol Airport (AGP).",
    "airport": { "name": "Málaga-Costa del Sol Airport", "code": "AGP" },
    "ticketInfo": "Paid, timed-entry permit required and must be booked online in advance through the official platform — there are no on-site ticket sales.",
    "ticketUrl": "https://www.caminitodelrey.info/en"
  },
  {
    "id": 8,
    "title": "Ronda & Puente Nuevo",
    "country": "Andalucía, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Puente_Nuevo,_Ronda.jpg",
      "alt": "Puente Nuevo bridge spanning the deep gorge at Ronda"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Ronda%2C+Spain",
    "best_time_to_visit": "Late afternoon light for photographing the Puente Nuevo, or early morning to beat the day-trip buses from the coast.",
    "text": "Perched dramatically on either side of the plunging El Tajo gorge, Ronda's 18th-century Puente Nuevo bridge is one of Andalucía's most photographed sights. The whitewashed old town also holds Spain's oldest bullring and sweeping views over the surrounding sierra.",
    "opening_hours": "Town and bridge viewpoints open public spaces. Bullring museum: daily 10:00 AM - 6:00 PM (varies seasonally).",
    "visit_duration": "Half day.",
    "distance": "Located in Ronda, Málaga province, about 100km from Málaga-Costa del Sol Airport (AGP).",
    "airport": { "name": "Málaga-Costa del Sol Airport", "code": "AGP" },
    "ticketInfo": "Town and bridge access are free. The Plaza de Toros bullring museum charges separate admission."
  }
]
export default data
