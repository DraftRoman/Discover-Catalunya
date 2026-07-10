const data = [
  {
    "id": 1,
    "title": "Stanley Park",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Siwash_Rock_and_the_Seawall_at_Stanley_Park.jpg",
      "alt": "Siwash Rock along the seawall path at Stanley Park in Vancouver"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Stanley+Park%2C+Vancouver",
    "best_time_to_visit": "Early morning or evening for a quieter walk or cycle along the 10km seawall that circles the park.",
    "text": "A 400-hectare forested peninsula on the edge of downtown Vancouver, ringed by the famous seawall path and dotted with towering totem poles, old-growth cedar and fir, and viewpoints like Siwash Rock and Prospect Point.",
    "opening_hours": "Open access, 24 hours (some facilities keep set hours).",
    "visit_duration": "2 hours to full day.",
    "distance": "Located adjacent to downtown Vancouver, about 15km from Vancouver International Airport (YVR).",
    "ticketInfo": "Free to enter and explore. Bike/rollerblade rentals and the miniature train inside charge separate fees."
  },
  {
    "id": 2,
    "title": "Capilano Suspension Bridge Park",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Capilano_Suspension_Bridge,_Vancouver,_Canada_(July_2016)_1.jpg",
      "alt": "Visitors crossing the Capilano Suspension Bridge high above the forest canyon"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Capilano+Suspension+Bridge+Park",
    "best_time_to_visit": "Weekday mornings to cross the bridge before tour buses arrive; November-January for the Canyon Lights winter light show.",
    "text": "A 137-metre suspension bridge swings 70 metres above the Capilano River canyon, connected to a treetop canopy walkway through old-growth rainforest and a cliffside boardwalk clinging to the canyon wall.",
    "opening_hours": "Daily, typically 9:00/10:00 AM - 5:00/8:00 PM, hours vary seasonally.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in North Vancouver, about 25km from Vancouver International Airport (YVR).",
    "ticketInfo": "Paid admission required for park and bridge access.",
    "ticketUrl": "https://www.capbridge.com/tickets-and-hours/"
  },
  {
    "id": 3,
    "title": "Butchart Gardens",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Butchart_Gardens_-_Victoria,_British_Columbia,_Canada_(29211782612).jpg",
      "alt": "Colourful flower beds in the Sunken Garden at Butchart Gardens near Victoria"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Butchart+Gardens%2C+Victoria",
    "best_time_to_visit": "Summer evenings for the Saturday fireworks (seasonal), or December for elaborate holiday illuminations.",
    "text": "A century-old floral showpiece built inside a former limestone quarry near Victoria, its Sunken Garden, Rose Garden, and Japanese Garden burst with over 900 varieties of plants across 22 hectares.",
    "opening_hours": "Daily from 9:00 AM; closing time varies seasonally, as late as 10:00 PM in summer.",
    "visit_duration": "2-3 hours.",
    "distance": "Located in Brentwood Bay, about 23km from Victoria International Airport (YYJ).",
    "airport": { "name": "Victoria International Airport", "code": "YYJ" },
    "ticketInfo": "Paid admission required; prices vary by season.",
    "ticketUrl": "https://butchartgardens.com/buy-tickets/"
  },
  {
    "id": 4,
    "title": "Granville Island",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Granville_Island_sign,_Vancouver_(2012).JPG",
      "alt": "Sign marking the entrance to Granville Island in Vancouver"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Granville+Island%2C+Vancouver",
    "best_time_to_visit": "Saturday or Sunday morning, when the Public Market and artisan studios are liveliest.",
    "text": "A former industrial peninsula under the Granville Street Bridge, reworked into a beloved public market, artist studios, theatres, and marina. The covered Public Market is packed with local produce, seafood, and street food stalls.",
    "opening_hours": "Public Market: daily 9:00 AM - 7:00 PM. The island itself is open access.",
    "visit_duration": "2-3 hours.",
    "distance": "Located under the Granville Street Bridge, about 17km from Vancouver International Airport (YVR).",
    "ticketInfo": "Free to explore; you pay only for what you buy at market stalls and shops."
  },
  {
    "id": 5,
    "title": "Whistler",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Flags_and_clouds_in_Whistler_(9368460028).jpg",
      "alt": "Prayer flags and mountain clouds above Whistler Village"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Whistler%2C+British+Columbia",
    "best_time_to_visit": "Winter for world-class skiing on Whistler and Blackcomb mountains, or summer for hiking, mountain biking, and the Peak 2 Peak Gondola.",
    "text": "Host of the 2010 Winter Olympics alpine events, this pedestrian village at the base of two enormous ski mountains has become a year-round destination, linked by the record-breaking Peak 2 Peak Gondola spanning between Whistler and Blackcomb.",
    "opening_hours": "Village: open access. Lifts and gondolas run seasonally, roughly 10:00 AM - 5:00 PM.",
    "visit_duration": "Full day to multi-day.",
    "distance": "Located in the Coast Mountains, about 120km from Vancouver International Airport (YVR).",
    "ticketInfo": "The village is free to wander. Lift tickets, the Peak 2 Peak Gondola, and most mountain activities are paid separately."
  },
  {
    "id": 6,
    "title": "BC Parliament Buildings & Victoria Inner Harbour",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/British_Columbia_Parliament_Buildings_-_Pano_-_HDR.jpg",
      "alt": "The illuminated British Columbia Parliament Buildings beside Victoria's Inner Harbour"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=BC+Parliament+Buildings%2C+Victoria",
    "best_time_to_visit": "Dusk, when thousands of lights outline the Parliament Buildings' domes and towers above the harbour.",
    "text": "British Columbia's stately neo-baroque legislature building anchors Victoria's picturesque Inner Harbour, framed by the grand Fairmont Empress hotel, float planes taking off from the water, and street performers along the waterfront promenade.",
    "opening_hours": "Grounds and harbourfront: open access. Free self-guided and guided legislature tours run on weekdays.",
    "visit_duration": "1.5-2.5 hours.",
    "distance": "Located in central Victoria, about 20km from Victoria International Airport (YYJ).",
    "airport": { "name": "Victoria International Airport", "code": "YYJ" },
    "ticketInfo": "Free access to the grounds, harbourfront, and legislature tours."
  },
  {
    "id": 7,
    "title": "Grouse Mountain",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver_from_Grouse_mountain.jpg",
      "alt": "View over Vancouver and the harbour from the top of Grouse Mountain"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Grouse+Mountain%2C+North+Vancouver",
    "best_time_to_visit": "Clear evenings for sunset views over the city, or winter for skiing and snowshoeing minutes from downtown.",
    "text": "Known as 'the Peak of Vancouver,' this North Shore mountain is reached by the Skyride aerial tramway, opening onto lumberjack shows, a wildlife refuge with rescued grizzly bears, zip-lining, and panoramic views over the city and Strait of Georgia.",
    "opening_hours": "Daily, roughly 9:00/10:00 AM - 9:00/10:00 PM depending on season.",
    "visit_duration": "2-4 hours.",
    "distance": "Located in North Vancouver, about 25km from Vancouver International Airport (YVR).",
    "ticketInfo": "Paid admission includes the Skyride tramway; most on-mountain activities and attractions are included or ticketed separately.",
    "ticketUrl": "https://www.grousemountain.com/tickets-passes-summer"
  },
  {
    "id": 8,
    "title": "Vancouver Aquarium",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver_Aquarium_entrance.jpg",
      "alt": "Entrance to the Vancouver Aquarium inside Stanley Park"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Vancouver+Aquarium",
    "best_time_to_visit": "Weekday mornings for smaller crowds around the sea otter and dolphin viewing areas.",
    "text": "Canada's largest aquarium, tucked inside Stanley Park, showcases marine life from the Pacific Northwest to tropical reefs, with a strong focus on rescue, rehabilitation, and ocean conservation research.",
    "opening_hours": "Daily, typically 10:00 AM - 5:00 PM.",
    "visit_duration": "2-3 hours.",
    "distance": "Located inside Stanley Park, about 17km from Vancouver International Airport (YVR).",
    "ticketInfo": "Paid, timed-entry admission required; book online in advance for the best availability.",
    "ticketUrl": "https://www.vanaqua.org/visit/tickets"
  },
  {
    "id": 9,
    "title": "Okanagan Valley",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Vineyards_and_Lake-_Osoyoos_in_the_Okanagan_Valley.jpg",
      "alt": "Vineyards overlooking a lake in the Okanagan Valley near Osoyoos"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Okanagan+Valley%2C+British+Columbia",
    "best_time_to_visit": "Late summer and early autumn, during harvest season, when wineries host tastings and vineyard tours.",
    "text": "Canada's warmest wine region stretches along a chain of long, narrow lakes, its desert-like hillsides covered in vineyards, orchards, and over 200 wineries producing everything from crisp whites to ice wine.",
    "opening_hours": "Open access; individual wineries and tasting rooms keep their own hours, generally 10:00 AM - 6:00 PM.",
    "visit_duration": "Full day to multi-day.",
    "distance": "Centred around Kelowna, about 4km from Kelowna International Airport (YLW).",
    "airport": { "name": "Kelowna International Airport", "code": "YLW" },
    "ticketInfo": "Free to drive the wine routes and lakeshores. Winery tastings and tours charge individual fees."
  },
  {
    "id": 10,
    "title": "Pacific Rim National Park Reserve",
    "country": "British Columbia, Canada",
    "img": {
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Long_beach_-_Tofino_-_Vancouver_Island_-_12.jpg",
      "alt": "Long Beach's wide sandy shoreline in Pacific Rim National Park Reserve near Tofino"
    },
    "googleMapsLink": "https://www.google.com/maps/search/?api=1&query=Pacific+Rim+National+Park+Reserve",
    "best_time_to_visit": "Winter for storm-watching along Long Beach, or summer for surfing and calmer weather.",
    "text": "A rugged stretch of Vancouver Island's Pacific coast near Tofino and Ucluelet, protecting old-growth rainforest, the surfable sands of Long Beach, and the multi-day Wild Pacific and West Coast hiking trails.",
    "opening_hours": "Open access year-round; the visitor centre keeps seasonal hours.",
    "visit_duration": "Full day to multi-day.",
    "distance": "Located near Tofino on Vancouver Island, reached via ferry and a scenic drive, about 315km from Vancouver International Airport (YVR).",
    "ticketInfo": "A Parks Canada day pass (paid) is required to access the park.",
    "ticketUrl": "https://parks.canada.ca/pn-np/bc/pacificrim"
  }
]
export default data
