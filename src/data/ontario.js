const data = [
  {
    "id": 1,
    "title": "CN Tower",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/CN_Tower,_Toronto,_Canada9.jpg",
      "alt": "The CN Tower rising above the Toronto skyline"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=CN+Tower%2C+Toronto",
    "best_time_to_visit": "Late afternoon into sunset, to see the city by day from the LookOut level and watch it light up at night.",
    "text": "Once the tallest free-standing structure in the world, this 553-metre communications tower defines the Toronto skyline. The glass floor, outdoor SkyPod, and optional EdgeWalk (a hands-free walk around the tower's edge) draw visitors from around the world for sweeping views over Lake Ontario.",
    "opening_hours": "Daily, typically 9:00 AM - 10:30 PM (hours vary seasonally).",
    "visit_duration": "1.5-2.5 hours.",
    "distance": "Located in downtown Toronto, about 27km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Timed-entry paid admission required; EdgeWalk and SkyPod access are ticketed separately. Book online in advance to secure an entry time.",
    "ticketUrl": "https://www.cntower.ca/buy-your-tickets-here"
  },
  {
    "id": 2,
    "title": "Niagara Falls (Horseshoe Falls)",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Niagara_Falls_(Horseshoe_Falls).jpg",
      "alt": "Horseshoe Falls at Niagara Falls seen from the Canadian side"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Niagara+Falls%2C+Ontario",
    "best_time_to_visit": "Early morning to beat the crowds, or evening to see the falls illuminated and (seasonally) topped with fireworks.",
    "text": "The thundering Canadian Horseshoe Falls, the largest of the three waterfalls that make up Niagara Falls, is best experienced up close aboard the Niagara City Cruises boat tour, which sails right into the mist at the base of the falls.",
    "opening_hours": "Falls and parkway: open access year-round. Boat cruises run daily, seasonally, roughly 9:00 AM - 8:00 PM.",
    "visit_duration": "Half day to full day.",
    "distance": "Located in Niagara Falls, about 130km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Viewing the falls from the parkway is free. The boat cruise into the falls' mist requires a paid, timed ticket.",
    "ticketUrl": "https://www.niagaraparks.com/visit/attractions/hornblower-niagara-cruises/"
  },
  {
    "id": 3,
    "title": "Royal Ontario Museum (ROM)",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/ROM_Royal_Ontario_Museum_Toronto_CA_2038_(4026202532).jpg",
      "alt": "The angular Michael Lee-Chin Crystal addition to the Royal Ontario Museum"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Royal+Ontario+Museum%2C+Toronto",
    "best_time_to_visit": "Weekday mornings for a quieter visit through the dinosaur and mineral galleries.",
    "text": "Canada's largest museum spans art, culture, and natural history in 40 galleries, from dinosaur skeletons to Egyptian mummies. Daniel Libeskind's jagged, crystalline glass-and-metal extension is as striking as anything inside.",
    "opening_hours": "Daily 10:00 AM - 5:30 PM (extended Fridays in some seasons).",
    "visit_duration": "2-3 hours.",
    "distance": "Located in downtown Toronto, about 28km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Paid admission required. Plan-ahead online pricing is generally cheaper than buying on the day.",
    "ticketUrl": "https://tickets.rom.on.ca/en/shop"
  },
  {
    "id": 4,
    "title": "Toronto Islands",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Toronto_skyline_from_centre_island.jpg",
      "alt": "The Toronto skyline viewed across the water from the Toronto Islands"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Toronto+Islands",
    "best_time_to_visit": "Summer weekday, arriving on an early ferry to enjoy the beaches and skyline views before the crowds.",
    "text": "A car-free chain of small islands just offshore from downtown, reached by a short ferry ride. Beaches, bike paths, and a small amusement park sit just minutes from the CN Tower, with some of the best postcard views of the Toronto skyline looking back at the city.",
    "opening_hours": "Islands: open access. Ferries run daily, roughly 6:35 AM - 11:45 PM (seasonal schedule).",
    "visit_duration": "Half day to full day.",
    "distance": "Ferry departs from the Jack Layton Ferry Terminal in downtown Toronto, about 28km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Free to explore the islands; the ferry ride itself requires a paid ticket."
  },
  {
    "id": 5,
    "title": "St. Lawrence Market",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Lobster_Roll_St._Lawrence_Market.JPG",
      "alt": "A fresh lobster roll from a food stall inside St. Lawrence Market"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=St.+Lawrence+Market%2C+Toronto",
    "best_time_to_visit": "Saturday morning, when the farmers' market fills the north building alongside the regular vendor stalls.",
    "text": "Named the world's best food market by National Geographic, this historic market complex packs peameal bacon sandwiches, artisan cheese, and fresh seafood stalls into a 19th-century building that once housed Toronto's city hall.",
    "opening_hours": "Tue-Fri 9:00 AM - 7:00 PM, Sat 7:00 AM - 5:00 PM. Closed Sundays and Mondays.",
    "visit_duration": "1-1.5 hours.",
    "distance": "Located in downtown Toronto, about 27km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Free to browse; you pay only for what you buy at individual stalls."
  },
  {
    "id": 6,
    "title": "Distillery District",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Distillery_District,_Toronto,_Canada,_2006.jpg",
      "alt": "Red-brick Victorian industrial buildings in Toronto's Distillery District"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Distillery+District%2C+Toronto",
    "best_time_to_visit": "Evenings, and especially during the Toronto Christmas Market held here each winter.",
    "text": "Thirty red-brick Victorian industrial buildings from the former Gooderham and Worts distillery, once the largest in the British Empire, now hold galleries, boutiques, and cafes across a pedestrian-only cobblestone quarter.",
    "opening_hours": "Open public district, accessible daily; individual shops keep their own hours.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in downtown Toronto, about 30km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Free to explore. Some seasonal events and exhibitions inside charge admission."
  },
  {
    "id": 7,
    "title": "Parliament Hill, Ottawa",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Centre_Block_-_Parliament_Hill.jpg",
      "alt": "The Gothic Revival Centre Block and Peace Tower on Parliament Hill in Ottawa"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Parliament+Hill%2C+Ottawa",
    "best_time_to_visit": "Summer for the daily Changing of the Guard ceremony, or evening for the free sound-and-light show projected on Centre Block.",
    "text": "Canada's seat of government sits on a bluff above the Ottawa River, its Gothic Revival Centre Block topped by the Peace Tower. Free guided tours go inside the Parliament buildings, and the grounds host the Changing of the Guard each summer morning.",
    "opening_hours": "Grounds: open access. Building tours: roughly 9:00 AM - 4:30 PM, reservation recommended.",
    "visit_duration": "1.5-2.5 hours.",
    "distance": "Located in central Ottawa, about 15km from Ottawa Macdonald-Cartier International Airport (YOW).",
    "airport": { "name": "Ottawa Macdonald-Cartier International Airport", "code": "YOW" },
    "ticketInfo": "Free access to the grounds and to guided interior tours, though tours require advance reservation due to limited capacity."
  },
  {
    "id": 8,
    "title": "Algonquin Provincial Park",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Whitefish_Lake,_Algonquin_Park,_Ontario.jpg",
      "alt": "A calm lake surrounded by forest inside Algonquin Provincial Park"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Algonquin+Provincial+Park",
    "best_time_to_visit": "Autumn (late September to early October) for Ontario's most famous fall-colour display, or summer for canoeing and moose-spotting.",
    "text": "Ontario's oldest provincial park protects a vast wilderness of lakes, rivers, and forest on the Canadian Shield. Canoe routes threading between hundreds of lakes make this one of the best-known canoeing destinations in the world, alongside hiking trails and excellent wildlife viewing.",
    "opening_hours": "Open access year-round; the Highway 60 corridor and visitor centre are most easily reached in this stretch.",
    "visit_duration": "Full day to multi-day.",
    "distance": "Located about 3 hours north of Toronto, roughly 280km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "A daily vehicle permit (paid) is required to enter the park. Canoe rentals and campsites are booked separately.",
    "ticketUrl": "https://www.ontarioparks.com/park/algonquin"
  },
  {
    "id": 9,
    "title": "Casa Loma",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_Loma,_Toronto,_Canada.jpg",
      "alt": "The turreted exterior of Casa Loma castle in Toronto"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Casa+Loma%2C+Toronto",
    "best_time_to_visit": "Weekday mornings for a quieter walk through the towers and gardens; December for the seasonal light and decor displays.",
    "text": "A turreted, medieval-style castle built between 1911 and 1914 for financier Sir Henry Pellatt, complete with secret passages, a nearly 250-metre tunnel, and manicured Edwardian gardens overlooking the city.",
    "opening_hours": "Daily 9:30 AM - 5:00 PM.",
    "visit_duration": "1.5-2 hours.",
    "distance": "Located in midtown Toronto, about 30km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Paid admission includes a mobile audio guide. Book online for the next available entry time.",
    "ticketUrl": "https://casaloma.ca/visit-casa-loma-in-toronto-buy-tickets/"
  },
  {
    "id": 10,
    "title": "Ripley's Aquarium of Canada",
    "country": "Ontario, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ripley%27s_Aquarium_of_Canada,_Toronto,_Ontario.jpg",
      "alt": "Exterior of Ripley's Aquarium of Canada beside the CN Tower in Toronto"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Ripley%27s+Aquarium+of+Canada%2C+Toronto",
    "best_time_to_visit": "Weekday mornings, right at opening, to see the moving glass tunnel through the shark tank before it gets busy.",
    "text": "A 5.7-million-litre aquarium at the base of the CN Tower, home to a 96-metre underwater viewing tunnel that glides visitors through shark- and ray-filled waters via a slow-moving conveyor.",
    "opening_hours": "Daily, typically 9:00 AM - 9:00 PM (hours vary seasonally).",
    "visit_duration": "2-3 hours.",
    "distance": "Located in downtown Toronto, about 27km from Toronto Pearson International Airport (YYZ).",
    "ticketInfo": "Paid, timed-entry tickets required; flexible (non-timed) tickets are also available at a premium.",
    "ticketUrl": "https://www.ripleys.com/attractions/ripleys-aquarium-of-canada"
  }
]
export default data
