const data = [
  {
    "id": 1,
    "title": "Vieux-Québec & Château Frontenac",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Chateau_Frontenac_Quebec_City.jpg",
      "alt": "The turreted Château Frontenac towering over Old Quebec City"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Chateau+Frontenac%2C+Quebec+City",
    "best_time_to_visit": "Winter for a fairy-tale, snow-covered old town, or golden hour for photos of the château from the Dufferin Terrace boardwalk.",
    "text": "North America's only walled city outside Mexico, Old Quebec's cobblestone streets are watched over by the green-turreted Fairmont Château Frontenac, one of the most photographed hotels in the world. The Dufferin Terrace boardwalk along the cliff offers sweeping views over the St. Lawrence River.",
    "opening_hours": "Old town and terrace: open access. Château interior is a working hotel; guided historical tours run several times daily.",
    "visit_duration": "Half day.",
    "distance": "Located in central Quebec City, about 15km from Québec City Jean Lesage International Airport (YQB).",
    "airport": { "name": "Québec City Jean Lesage International Airport", "code": "YQB" },
    "ticketInfo": "Free to explore the old town and terrace. A paid guided tour is available for those wanting to see inside the Château Frontenac."
  },
  {
    "id": 2,
    "title": "Chute Montmorency (Montmorency Falls)",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Montmorency_Falls_Quebec.jpg",
      "alt": "Montmorency Falls plunging down a cliff near Quebec City"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Montmorency+Falls%2C+Quebec",
    "best_time_to_visit": "Winter, when spray from the falls freezes into a giant ice cone ('pain de sucre') that visitors can climb around.",
    "text": "At 83 metres, this waterfall is nearly 30 metres taller than Niagara Falls, just a short drive from Quebec City. A cable car and a suspended footbridge let visitors look straight down into the gorge, and a 300-metre zipline crosses right over the falls.",
    "opening_hours": "Park: open access year-round. Cable car and zipline typically run 9:00 AM - 5:00/9:00 PM, seasonal hours.",
    "visit_duration": "1.5-2.5 hours.",
    "distance": "Located in Boischatel, about 25km from Québec City Jean Lesage International Airport (YQB).",
    "airport": { "name": "Québec City Jean Lesage International Airport", "code": "YQB" },
    "ticketInfo": "Park access and lower trails are free. The cable car, suspended footbridge, and zipline each require a separate paid ticket.",
    "ticketUrl": "https://www.sepaq.com/en/reservation/parc-de-la-chute-montmorency"
  },
  {
    "id": 3,
    "title": "Basilique Notre-Dame de Montréal",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Notre_Dame_Basilica_Montreal.jpg",
      "alt": "The Gothic Revival twin towers of Notre-Dame Basilica in Montreal"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Notre-Dame+Basilica%2C+Montreal",
    "best_time_to_visit": "Evening, for the AURA sound-and-light show projected across the basilica's Gothic Revival interior.",
    "text": "One of the most spectacular church interiors in North America, this 19th-century basilica is awash in deep blue vaults, gold stars, and intricate wood carving lit by stained glass depicting Montreal's own history rather than biblical scenes. It was also the site of Celine Dion's wedding.",
    "opening_hours": "Daily, roughly 9:00 AM - 4:00/4:30 PM for visits; AURA multimedia shows run select evenings.",
    "visit_duration": "45-60 minutes for a visit; the AURA show runs about 25 minutes.",
    "distance": "Located in Old Montreal, about 22km from Montréal-Trudeau International Airport (YUL).",
    "ticketInfo": "Paid admission for a basilica visit. The AURA light show is a separate paid ticket, bookable in a combined package.",
    "ticketUrl": "https://www.basiliquenotredame.ca/en/hours-and-rates"
  },
  {
    "id": 4,
    "title": "Vieux-Montréal (Old Montreal)",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Place_Jacques-Cartier,_Vieux-Montr%C3%A9al,_Montreal,_Quebec_(30068046525).jpg",
      "alt": "Cafes and cobblestones at Place Jacques-Cartier in Old Montreal"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Old+Montreal",
    "best_time_to_visit": "Summer evenings, when Place Jacques-Cartier fills with street performers and outdoor cafe terraces.",
    "text": "Montreal's founding neighbourhood along the St. Lawrence River blends 17th- and 18th-century stone architecture with cobblestone streets, horse-drawn calèches, and the lively Old Port waterfront just beyond it.",
    "opening_hours": "Open public district, accessible 24 hours.",
    "visit_duration": "Half day to full day.",
    "distance": "Located in central Montreal, about 22km from Montréal-Trudeau International Airport (YUL).",
    "ticketInfo": "Free to explore. Individual museums and attractions inside the district charge separate admission."
  },
  {
    "id": 5,
    "title": "Plaines d'Abraham (Plains of Abraham)",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/PlainsOfAbraham2007.jpg",
      "alt": "The open green expanse of the Plains of Abraham battlefield park in Quebec City"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Plains+of+Abraham%2C+Quebec+City",
    "best_time_to_visit": "Summer for outdoor festivals and concerts held on the park's Green, or clear afternoons for river views from the bluffs.",
    "text": "The site of the pivotal 1759 battle between British and French forces that decided the fate of New France is now a sprawling urban park above the St. Lawrence, with cycling paths, picnic lawns, and a summer concert venue.",
    "opening_hours": "Open access year-round.",
    "visit_duration": "1-2 hours.",
    "distance": "Located in central Quebec City, about 13km from Québec City Jean Lesage International Airport (YQB).",
    "airport": { "name": "Québec City Jean Lesage International Airport", "code": "YQB" },
    "ticketInfo": "Free public park. The on-site Plains of Abraham Museum charges separate admission."
  },
  {
    "id": 6,
    "title": "Oratoire Saint-Joseph (Saint Joseph's Oratory)",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_St._Joseph%27s_Oratory_on_Mount_Royal_08_2025.jpg",
      "alt": "The large copper dome of Saint Joseph's Oratory on Mount Royal in Montreal"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Saint+Joseph%27s+Oratory%2C+Montreal",
    "best_time_to_visit": "Weekday mornings for a peaceful visit, or climb the exterior stairs (some pilgrims do so on their knees) at any time of day.",
    "text": "Canada's largest church and one of the world's most-visited shrines, its dome is second in size only to St. Peter's Basilica in Rome. Brother André, the humble doorman credited with founding it, is entombed inside, and his preserved heart remains a pilgrimage relic.",
    "opening_hours": "Daily, roughly 6:00 AM - 9:00 PM.",
    "visit_duration": "1-2 hours.",
    "distance": "Located on Mount Royal, about 25km from Montréal-Trudeau International Airport (YUL).",
    "ticketInfo": "Free entry; donations are welcomed and support the Oratory's upkeep."
  },
  {
    "id": 7,
    "title": "Mont-Tremblant",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Mont-Tremblant_Village.JPG",
      "alt": "Colourful pedestrian village buildings at the base of Mont-Tremblant"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Mont-Tremblant%2C+Quebec",
    "best_time_to_visit": "Autumn for the Laurentians' fall foliage, or winter for skiing on eastern Canada's highest vertical drop.",
    "text": "A colourful pedestrian ski village at the foot of the Laurentian Mountains' tallest peak, with a gondola running to the summit in every season. Beyond the resort, the surrounding national park offers hiking, canoeing, and waterfalls.",
    "opening_hours": "Village: open access year-round. Gondola and ski lifts run seasonally.",
    "visit_duration": "Full day to multi-day.",
    "distance": "Located in the Laurentians, about 140km from Montréal-Trudeau International Airport (YUL).",
    "ticketInfo": "The pedestrian village is free to wander. Gondola rides, ski lift tickets, and most mountain activities are paid separately."
  },
  {
    "id": 8,
    "title": "Citadelle de Québec",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/La_Citadelle_de_Qu%C3%A9bec,_vue_du_ciel.JPG",
      "alt": "Aerial view of the star-shaped Citadelle fortress in Quebec City"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Citadelle+de+Quebec",
    "best_time_to_visit": "Summer mornings to catch the daily Changing of the Guard ceremony on the parade square.",
    "text": "The largest still-occupied fortress in North America, this star-shaped citadel atop Cap Diamant has guarded Quebec City since the early 19th century and remains an active military garrison and vice-regal residence to this day.",
    "opening_hours": "Guided tours run several times daily; exact hours vary seasonally.",
    "visit_duration": "1-1.5 hours.",
    "distance": "Located in central Quebec City, about 14km from Québec City Jean Lesage International Airport (YQB).",
    "airport": { "name": "Québec City Jean Lesage International Airport", "code": "YQB" },
    "ticketInfo": "Access is by paid guided tour only, which also includes the Royal 22e Régiment Museum.",
    "ticketUrl": "https://billets.lacitadelle.qc.ca/"
  },
  {
    "id": 9,
    "title": "Musée des beaux-arts de Montréal (MMFA)",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Museum_of_Fine_Arts,_main_entrance,_Montreal.jpg",
      "alt": "The classical stone entrance of the Montreal Museum of Fine Arts"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Musee+des+beaux-arts+de+Montreal",
    "best_time_to_visit": "The first Sunday of the month, when the permanent collection is free for Quebec residents; otherwise any weekday morning.",
    "text": "Canada's oldest museum and one of its largest, spanning five pavilions of art from antiquity to contemporary, alongside major touring exhibitions of international art, fashion, and design.",
    "opening_hours": "Tue-Sun 10:00 AM - 5:00 PM (Wed until 9:00 PM). Closed Mondays.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in downtown Montreal, about 22km from Montréal-Trudeau International Airport (YUL).",
    "ticketInfo": "The permanent collection is free to visit. Major temporary exhibitions require paid, timed admission.",
    "ticketUrl": "https://www.mbam.qc.ca/en/tickets/"
  },
  {
    "id": 10,
    "title": "Île d'Orléans",
    "country": "Québec, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pont_de_l_ile_d_Orleans.jpg",
      "alt": "The bridge connecting Île d'Orléans to the mainland near Quebec City"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Ile+d%27Orleans%2C+Quebec",
    "best_time_to_visit": "Late summer, when roadside stands overflow with the island's famous strawberries, apples, and produce.",
    "text": "Just across a single bridge from Quebec City, this rural island of six historic villages has changed little since New France, its farms, orchards, and vineyards earning it the nickname 'the Garden of Quebec.'",
    "opening_hours": "Open access year-round; individual farms, wineries, and shops keep their own hours.",
    "visit_duration": "Half day to full day.",
    "distance": "Located just east of Quebec City, about 25km from Québec City Jean Lesage International Airport (YQB).",
    "airport": { "name": "Québec City Jean Lesage International Airport", "code": "YQB" },
    "ticketInfo": "Free to drive or cycle the island's roads. Individual farms, wineries, and cideries charge for tastings and tours."
  }
]
export default data
