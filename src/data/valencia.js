const data = [
  {
    "id": 1,
    "title": "Ciutat de les Arts i les Ciències",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ciutat_de_les_Arts_i_les_Ci%C3%A8ncies_(Valencia,_Spain)_01.jpg",
      "alt": "Futuristic white buildings of the City of Arts and Sciences in Valencia"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Ciutat+de+les+Arts+i+les+Ci%C3%A8ncies%2C+Valencia",
    "best_time_to_visit": "Late afternoon, when the reflecting pools mirror the futuristic architecture in golden light.",
    "text": "Santiago Calatrava's dazzling complex of white, lattice-shelled buildings houses Europe's largest aquarium (Oceanogràfic), an IMAX planetarium (Hemisfèric), and an interactive science museum. Even without entering any venue, strolling the reflecting-pool plazas is a striking experience.",
    "opening_hours": "Varies by venue and season, typically 10:00 AM - 6:00/8:00 PM. Exterior plazas open 24 hours.",
    "visit_duration": "Half day to full day.",
    "distance": "Located in central Valencia, about 9km from Valencia Airport (VLC).",
    "ticketInfo": "Paid entry required for each venue; combined multi-venue passes are available and cheaper than single tickets. Exterior walkways and plazas are free.",
    "ticketUrl": "https://tickets.cac.es/internetCAC/?language=en"
  },
  {
    "id": 2,
    "title": "La Llotja de la Seda",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Lonja_de_la_Seda,_Valencia,_Espa%C3%B1a,_2014-06-29,_DD_20.JPG",
      "alt": "Twisted Gothic columns inside the Silk Exchange trading hall in Valencia"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Llotja+de+la+Seda%2C+Valencia",
    "best_time_to_visit": "Weekday mornings for a quiet look at the spiraling columns of the trading hall.",
    "text": "A UNESCO World Heritage masterpiece of civil Gothic architecture, this former silk and commodity exchange is famous for its Sala de Contractació, where twisting helical columns fan out into a forest-like ceiling.",
    "opening_hours": "Mon-Sat 10:00 AM - 7:00 PM. Sun and public holidays 10:00 AM - 2:00 PM. Closed Jan 1, Jan 6, May 1, Dec 25.",
    "visit_duration": "45-60 minutes.",
    "distance": "Located in central Valencia, about 10km from Valencia Airport (VLC).",
    "ticketInfo": "Small paid admission fee. Free entry on Sundays and public holidays.",
    "ticketUrl": "https://www.valencia.es/apps/tickets/tickets.php?c=2&idioma=english"
  },
  {
    "id": 3,
    "title": "Mercado Central de Valencia",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercado_Central,_Valencia,_Espa%C3%B1a,_2014-06-30,_DD_117.JPG",
      "alt": "Art Nouveau iron and stained-glass interior of the Mercado Central in Valencia"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Mercado+Central+de+Valencia",
    "best_time_to_visit": "Weekday mid-morning when stalls are fully stocked but before the lunchtime rush.",
    "text": "One of Europe's oldest working markets still in its original building, this 1928 Art Nouveau hall is a riot of stained glass, iron latticework, and stalls piled high with jamón, fresh seafood, and Valencian produce.",
    "opening_hours": "Mon-Sat 7:30 AM - 3:00 PM. Closed Sundays.",
    "visit_duration": "1 hour.",
    "distance": "Located in central Valencia, about 10km from Valencia Airport (VLC).",
    "ticketInfo": "Free to browse; you only pay for what you buy at the stalls."
  },
  {
    "id": 4,
    "title": "Catedral de Valencia & Torre del Miguelete",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Catedral_de_Valencia,_Valencia,_Espa%C3%B1a,_2014-06-30,_DD_150.JPG",
      "alt": "Gothic facade and bell tower of Valencia Cathedral"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Catedral+de+Valencia",
    "best_time_to_visit": "Morning, before tour groups arrive, or sunset for the view from the Miguelete tower.",
    "text": "This Gothic cathedral is claimed by many scholars to hold the authentic Holy Grail chalice, displayed in its own chapel. Climbing the octagonal Miguelete bell tower rewards visitors with sweeping views over Valencia's old town.",
    "opening_hours": "Roughly Mon-Fri 10:30 AM - 6:30 PM, Sat 10:30 AM - 5:30 PM, Sun 2:00 PM - 5:30 PM (hours extend in summer). Miguelete Tower: daily 10:00 AM - 6:45 PM (Mar-Nov).",
    "visit_duration": "1-1.5 hours.",
    "distance": "Located in central Valencia, about 10km from Valencia Airport (VLC).",
    "ticketInfo": "Paid admission includes an audioguide, the museum, and the Holy Grail chapel. The Miguelete Tower climb is ticketed separately.",
    "ticketUrl": "https://catedraldevalencia.es/en/cultural-visit/hours-and-admission/"
  },
  {
    "id": 5,
    "title": "Parc Natural de l'Albufera",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/LA_ALBUFERA_DE_VALENCIA_01.jpg",
      "alt": "Calm waters and reed banks of the Albufera lagoon near Valencia at sunset"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Parc+Natural+de+l%27Albufera",
    "best_time_to_visit": "Sunset, when traditional wooden boats glide across the lagoon under orange skies — the classic postcard view of Valencia.",
    "text": "This vast freshwater lagoon and its surrounding rice paddies gave the world paella. A short boat ride out onto the still water at dusk, past reed-lined channels and flocks of waterfowl, is one of the region's most memorable experiences.",
    "opening_hours": "Open access year-round. Boat trips typically run mid-morning through sunset.",
    "visit_duration": "2-4 hours.",
    "distance": "Located about 15km south of Valencia, about 25km from Valencia Airport (VLC).",
    "ticketInfo": "Natural park access is free. Traditional boat trips ('albuferenc' rides) are a paid optional extra, booked locally in El Palmar or El Saler."
  },
  {
    "id": 6,
    "title": "Castillo de Peñíscola",
    "country": "Comunitat Valenciana, Spain",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Castillo_de_Pe%C3%B1%C3%ADscola_desde_el_mar.jpg",
      "alt": "Peñíscola castle and old town perched on a rocky peninsula over the sea"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Castillo+de+Pe%C3%B1%C3%ADscola",
    "best_time_to_visit": "Late afternoon, when the whitewashed old town glows and the day-trippers thin out.",
    "text": "Built by the Knights Templar on a rocky peninsula jutting into the Mediterranean, this fortress-town later became the refuge of the schismatic 'Papa Luna,' Pope Benedict XIII. Its labyrinthine whitewashed streets and sea-ringed castle walls have also served as a filming location for Game of Thrones.",
    "opening_hours": "Varies seasonally, generally 10:00 AM - 5:30/9:30 PM depending on month.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in Peñíscola, Castellón province, about 150km north of Valencia.",
    "ticketInfo": "Small paid admission to the castle interior. The old town streets and seafront are free to explore."
  }
]
export default data
