const asiaWeather = "Warm";
const southAmericaWeather = "Warm";
const europeWeather = "Cold";
const northAmericaWeather = "Cold";
const africaWeather = "Warm";

//TODO: add photos
//TODO: fix north america and south america options
//TODO: add any option, i.e. any continent, any size
//TODO: add breaks: no input, no matches
//TODO: Add about section
//TODO: Add footer with github link and copyright

const options = [
  //Tenerife
  {
    continent: "Europe",
    country: "Spain",
    city: "Tenerife, Canary Islands",
    weather: europeWeather,
    budget: 2100,
    size: "Mid",
    url: "https://nomadlist.com/tenerife"
    // photo: xx;
  },
  //Valencia
  {
    continent: "Europe",
    country: "Spain",
    city: "Valencia",
    weather: asiaWeather,
    budget: 2250,
    size: "Big",
    url: "https://nomadlist.com/valencia"
  },
  //Seville
  {
    continent: "Europe",
    country: "Spain",
    city: "Seville",
    weather: asiaWeather,
    budget: 2250,
    size: "Big",
    url: "https://nomadlist.com/seville"
  },
  //Lisbon
  {
    continent: "Europe",
    country: "Portugal",
    city: "Lisbon",
    weather: asiaWeather,
    budget: 1900,
    size: "Mid",
    url: "https://nomadlist.com/lisbon"
  },
  //Vilnius
  {
    continent: "Europe",
    country: "Lithuania",
    city: "Vilnius",
    weather: europeWeather,
    budget: 1900,
    size: "Mid",
    url: "https://nomadlist.com/vilnius"
  },
  //Porto
  {
    continent: "Europe",
    country: "Portugal",
    city: "Porto",
    weather: southAmericaWeather,
    budget: 1800,
    size: "Mid",
    url: "https://nomadlist.com/porto"
  },
  //Budapest
  {
    continent: "Europe",
    country: "Hungary",
    city: "Budapest",
    weather: europeWeather,
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/budapest"
  },
  //Sofia
  {
    continent: "Europe",
    country: "Bulgaria",
    city: "Sofia",
    weather: "Cold",
    budget: 1200,
    size: "Big",
    url: "https://nomadlist.com/sofia"
  },
  //Berlin
  {
    continent: "Europe",
    country: "Germany",
    city: "Berlin",
    weather: europeWeather,
    budget: 2800,
    size: "Big",
    url: "https://nomadlist.com/berlin"
  },
  //Zagreb
  {
    continent: "Europe",
    country: "Croatia",
    city: "Zagreb",
    weather: europeWeather,
    budget: 1800,
    size: "Mid",
    url: "https://nomadlist.com/zagreb"
  },
  //Buenos Aires
  {
    continent: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/buenos-aires"

  },
  //Ko Samui
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Samui",
    weather: asiaWeather,
    budget: 1400,
    size: "Small",
    url: "https://nomadlist.com/ko-samui"
  },
  //Mexico City
  {
    continent: "South America",
    country: "Mexico",
    city: "Mexico City",
    weather: southAmericaWeather,
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/mexico-city"
  },
  //Medellín
  {
    continent: "South America",
    country: "Colombia",
    city: "Medellín",
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/medellin"
  },
  //Canggu, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Canggu, Bali",
    weather: asiaWeather,
    budget: 1400,
    size: "Small",
    url: "https://nomadlist.com/canggu"
  },
  //São Paulo
  {
    continent: "South America",
    country: "Brazil",
    city: "São Paulo",
    weather: southAmericaWeather,
    budget: 1600,
    size: "Big",
    url: "https://nomadlist.com/sao-paulo"
  },
  //Bangkok
  {
    continent: "Asia",
    country: "Thailand",
    city: "Bangkok",
    weather: asiaWeather,
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/bangkok"
  },
  //Chaing Mai
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Chaing Mai",
    weather: asiaWeather,
    budget: 1100,
    size: "Mid",
    url: "https://nomadlist.com/chiang-mai"
  },
  //Da Nang
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Nang",
    weather: asiaWeather,
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/da-nang"
  },
  //Tbilisi
  {
    continent: "Europe",
    country: "Georgia",
    city: "Tbilisi",
    weather: europeWeather,
    budget: 1300,
    size: "Big",
    url: "https://nomadlist.com/tbilisi"
  },
  //Phuket
  {
    continent: "Asia",
    country: "Thailand",
    city: "Phuket",
    weather: asiaWeather,
    budget: 1700,
    size: "Mid",
    url: "https://nomadlist.com/phuket"
  },
  //Prague
  {
    continent: "Europe",
    country: "Czechia",
    city: "Prague",
    weather: europeWeather,
    budget: 2000,
    size: "Big",
    url: "https://nomadlist.com/prague"
  },
  //Istanbul
  {
    continent: "Europe",
    country: "Turkey",
    city: "Istanbul",
    weather: europeWeather,
    budget: 1300,
    size: "Big",
    url: "https://nomadlist.com/istanbul"
  },
  //Cape Town
  {
    continent: "Africa",
    country: "South Africa",
    city: "Cape Town",
    weather: africaWeather,
    budget: 1800,
    size: "Mid",
    url: "https://nomadlist.com/cape-town"
  },
  //Playa del Carmen
  {
    continent: "North America",
    country: "Mexico",
    city: "Playa del Carmen",
    weather: southAmericaWeather,
    budget: 1500,
    size: "Mid",
    url: "https://nomadlist.com/playa-del-carmen"
  },
  //Taipei
  {
    continent: "Asia",
    country: "Taiwan",
    city: "Taipei",
    weather: asiaWeather,
    budget: 2000,
    size: "Big",
    url: "https://nomadlist.com/taipei"
  },
  //Kiev
  {
    continent: "Europe",
    country: "Ukrane",
    city: "Kiev",
    weather: europeWeather,
    budget: 1800,
    size: "Big",
    url: "https://nomadlist.com/kiev"
  },
  //Bucharest
  {
    continent: "Europe",
    country: "Romania",
    city: "Bucharest",
    weather: europeWeather,
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/bucharest"
  },
  //Belgrade
  {
    continent: "Europe",
    country: "Serbia",
    city: "Belgrade",
    weather: europeWeather,
    budget: 1400,
    size: "Big",
    url: "https://nomadlist.com/belgrade"
  },
  //Ko Tao
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Tao",
    weather: asiaWeather,
    budget: 1500,
    size: "Small",
    url: "https://nomadlist.com/ko-tao"
  },
  //Saint Petersburg
  {
    continent: "Europe",
    country: "Russia",
    city: "Saint Petersburg",
    weather: europeWeather,
    budget: 1600,
    size: "Big",
    url: "https://nomadlist.com/saint-petersburg"
  },
  //Odessa
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Odessa",
    weather: europeWeather,
    budget: 1200,
    size: "Mid",
    url: "https://nomadlist.com/odessa"
  },
  //Havana
  {
    continent: "Europe",
    country: "Cuba",
    city: "Havana",
    weather: southAmericaWeather,
    budget: 1600,
    size: "Big",
    url: "https://nomadlist.com/havana"
  },
  //Ubud, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Ubud, Bali",
    weather: asiaWeather,
    budget: 1800,
    size: "Mid",
    url: "https://nomadlist.com/ubud"
  },
  //Moscow
  {
    continent: "Europe",
    country: "Russia",
    city: "Moscow",
    weather: europeWeather,
    budget: 2300,
    size: "Big",
    url: "https://nomadlist.com/moscow"
  },
  //Casablanca
  {
    continent: "Europe",
    country: "Morocco",
    city: "Casablanca",
    weather: "Mild",
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/casablanca"
  },
  //Dakar
  {
    continent: "Africa",
    country: "Senegal",
    city: "Dakar",
    weather: africaWeather,
    budget: 1500,
    size: "Big",
    url: "https://nomadlist.com/dakar"
  },
  //Bansko
  {
    continent: "Europe",
    country: "Bulgaria",
    city: "Bansko",
    weather: europeWeather,
    budget: 1300,
    size: "Small"
  },
  //Luang Prabang
  {
    continent: "Asia",
    country: "Laos",
    city: "Luang Prabang",
    weather: asiaWeather,
    budget: 1300,
    size: "Small",
    url: "https://nomadlist.com/luang-prabang"
  },
  //Santiago
  {
    continent: "South America",
    country: "Chile",
    city: "Santiago",
    weather: southAmericaWeather,
    budget: 1400,
    size: "Big",
    url: "https://nomadlist.com/santiago"
  },
  //Da Lat
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Lat",
    weather: asiaWeather,
    budget: 1000,
    size: "Mid",
    url: "https://nomadlist.com/da-lat"
  },
  //Fes
  {
    continent: "Africa",
    country: "Morocco",
    city: "Belgrade",
    weather: "Cold",
    budget: 1200,
    size: "Big",
    url: "https://nomadlist.com/fes"
  },
  //Marrakesh
  {
    continent: "Africa",
    country: "Morocco",
    city: "Marrakesh",
    weather: "Mild",
    budget: 1900,
    size: "Mid",
    url: "https://nomadlist.com/marrakesh"
  },
  //Phnom Penh
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Phnom Penh",
    weather: asiaWeather,
    budget: 1200,
    size: "Big",
    url: "https://nomadlist.com/phnom-penh"
  },
  //Tunis
  {
    continent: "Africa",
    country: "Tunisia",
    city: "Tunis",
    weather: "Warm",
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/tunis"
  },
  //Siem Reap
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Siem Reap",
    weather: asiaWeather,
    budget: 1000,
    size: "Mid",
    url: "https://nomadlist.com/siem-reap"
  },
  //Mamaia
  {
    continent: "Europe",
    country: "Romania",
    city: "Mamaia",
    weather: europeWeather,
    budget: 1400,
    size: "Mid",
    url: "https://nomadlist.com/mamaia"
  },
  //Montevideo
  {
    continent: "South America",
    country: "Uruguay",
    city: "Montevideo",
    weather: southAmericaWeather,
    budget: 1700,
    size: "Big",
    url: "https://nomadlist.com/montevideo"
  },
  //Hanoi
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Hanoi",
    weather: asiaWeather,
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/hanoi"
  },
  //Tallinn
  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    weather: europeWeather,
    budget: 2000,
    size: "Mid",
    url: "https://nomadlist.com/tallinn"
  },
  //Antalya
  {
    continent: "Asia",
    country: "Turkey",
    city: "Antalya",
    weather: "Mild",
    budget: 1100,
    size: "Big",
    url: "https://nomadlist.com/antalya"
  },
  //La Paz
  {
    continent: "North America",
    country: "Mexico",
    city: "La Paz",
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big",
    url: "https://nomadlist.com/la-paz"
  },
  //Male
  {
    continent: "Asia",
    country: "Maldives",
    city: "Male",
    weather: asiaWeather,
    budget: 2000,
    size: "Mid",
    url: "https://nomadlist.com/male"
  },
  //Cebu
  {
    continent: "Asia",
    country: "Philippines",
    city: "Cebu",
    weather: asiaWeather,
    budget: 1400,
    size: "Mid",
    url: "https://nomadlist.com/cebu"
  },
  //Palawan
  {
    continent: "Asia",
    country: "Philippines",
    city: "Palawan",
    weather: asiaWeather,
    budget: 1400,
    size: "Mid",
    url: "https://nomadlist.com/palawan"
  },
  //Izmir
  {
    continent: "Asia",
    country: "Turkey",
    city: "Izmir",
    weather: europeWeather,
    budget: 700,
    size: "Big",
    url: "https://nomadlist.com/izmir"
  },
  //Split
  {
    continent: "Europe",
    country: "Croatia",
    city: "Split",
    weather: "Mild",
    budget: 2500,
    size: "Mid",
    url: "https://nomadlist.com/split"
  },
  
  //Taghazout
  {
    continent: "Africa",
    country: "Morocco",
    city: "Taghazout",
    weather: "Mild",
    budget: 1100,
    size: "Mid",
    url: "https://nomadlist.com/taghazout"
  },
  //Warsaw
  {
    continent: "Europe",
    country: "Poland",
    city: "Warsaw",
    weather: europeWeather,
    budget: 1900,
    size: "Big",
    url: "https://nomadlist.com/warsaw"
  },
  //Makati
  {
    continent: "Asia",
    country: "Philippines",
    city: "Makati",
    weather: asiaWeather,
    budget: 1800,
    size: "Mid",
    url: "https://nomadlist.com/makati"
  },
  //Koh Lanta
  {
    continent: "Asia",
    country: "Thailand",
    city: "Koh Lanta",
    weather: asiaWeather,
    budget: 1500,
    size: "Small",
    url: "https://nomadlist.com/ko-lanta"
  },
  //Kraków
  {
    continent: "Europe",
    country: "Poland",
    city: "Kraków",
    weather: europeWeather,
    budget: 1500,
    size: "Mid",
    url: "https://nomadlist.com/krakow"
  },
  //Lviv
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Lviv",
    weather: europeWeather,
    budget: 1100,
    size: "Mid",
    url: "https://nomadlist.com/lviv"
  }
];

export default options