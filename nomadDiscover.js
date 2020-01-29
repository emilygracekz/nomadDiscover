const options = [
  //Tenerife
  {
    continent: "Europe",
    country: "Spain",
    city: "Tenerife, Canary Islands",
    weather: "Warm",
    budget: 2100,
    size: "XX"
  },
  //Valencia
  {
    continent: "Europe",
    country: "Spain",
    city: "Valencia",
    weather: "Warm",
    budget: 2250,
    size: "XX"
  },
  //Seville
  {
    continent: "Europe",
    country: "Spain",
    city: "Seville",
    weather: "Warm",
    budget: 2250,
    size: "XX"
  },
  //Lisbon
  {
    continent: "Europe",
    country: "Portugal",
    city: "Lisbon",
    weather: "Warm",
    budget: 1900,
    size: "XX"
  },
  //Vilnius
  {
    continent: "Europe",
    country: "Lithuania",
    city: "Vilnius",
    weather: "Cold",
    budget: 1900,
    size: "XX"
  },
  //Porto
  {
    continent: "Europe",
    country: "Portugal",
    city: "Porto",
    weather: "Warm",
    budget: 1800,
    size: "XX"
  },
  //Budapest
  {
    continent: "Europe",
    country: "Hungary",
    city: "Budapest",
    weather: "Cold",
    budget: 1500,
    size: "XX"
  },
  //Sofia
  {
    continent: "Europe",
    country: "Bulgaria",
    city: "Sofia",
    weather: "Cold",
    budget: 1200,
    size: "Big"
  },
  //Berlin
  {
    continent: "Europe",
    country: "Germany",
    city: "Berlin",
    weather: "Cold",
    budget: 2800,
    size: "Big"
  },
  //Zagreb
  {
    continent: "Europe",
    country: "Croatia",
    city: "Zagreb",
    weather: "Cold",
    budget: 1800,
    size: "Mid"
  },
  //Buenos Aires
  {
    continent: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Ko Samui
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Samui",
    weather: "Warm",
    budget: 1400,
    size: "Small"
  },
  //Mexico City
  {
    continent: "South America",
    country: "Mexico",
    city: "Mexico City",
    weather: "Warm",
    budget: 1500,
    size: "Big"
  },
  //Medellín
  {
    continent: "South America",
    country: "Colombia",
    city: "Medellín",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Canggu, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Canggu, Bali",
    weather: "Warm",
    budget: 1400,
    size: "Small"
  },
  //São Paulo
  {
    continent: "South America",
    country: "Brazil",
    city: "São Paulo",
    weather: "Warm",
    budget: 1600,
    size: "Big"
  },
  //Bangkok
  {
    continent: "Asia",
    country: "Thailand",
    city: "Bangkok",
    weather: "Warm",
    budget: 1500,
    size: "Big"
  },
  //Chaing Mai
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Chaing Mai",
    weather: "Warm",
    budget: 1100,
    size: "Mid"
  },
  //Da Nang
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Nang",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Tbilisi
  {
    continent: "Europe",
    country: "Georgia",
    city: "Tbilisi",
    weather: "Cold",
    budget: 1300,
    size: "Big"
  },
  //Phuket
  {
    continent: "Asia",
    country: "Thailand",
    city: "Phuket",
    weather: "Warm",
    budget: 1700,
    size: "Mid"
  },
  //Prague
  {
    continent: "Europe",
    country: "Czechia",
    city: "Prague",
    weather: "Cold",
    budget: 2000,
    size: "Big"
  },
  //Istanbul
  {
    continent: "Europe",
    country: "Turkey",
    city: "Istanbul",
    weather: "Cold",
    budget: 1300,
    size: "Big"
  },
  //Cape Town
  {
    continent: "Africa",
    country: "South Africa",
    city: "Cape Town",
    weather: "Warm",
    budget: 1800,
    size: "Mid"
  },
  //Playa del Carmel
  {
    continent: "North America",
    country: "Mexico",
    city: "Playa del Carmen",
    weather: "Warm",
    budget: 1500,
    size: "Mid"
  },
  //Taipei
  {
    continent: "Asia",
    country: "Taiwan",
    city: "Taipei",
    weather: "Warm",
    budget: 2000,
    size: "Big"
  },
  //Kiev
  {
    continent: "Europe",
    country: "Ukrane",
    city: "Kiev",
    weather: "Cold",
    budget: 1800,
    size: "Big"
  },
  //Bucharest
  {
    continent: "Europe",
    country: "Romania",
    city: "Bucharest",
    weather: "Cold",
    budget: 1500,
    size: "Big"
  },
  //Belgrade
  {
    continent: "Europe",
    country: "Serbia",
    city: "Belgrade",
    weather: "Cold",
    budget: 1400,
    size: "Big"
  },
  //Ko Tao
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Tao",
    weather: "Warm",
    budget: 1500,
    size: "Small"
  },
  //Saint Petersburg
  {
    continent: "Europe",
    country: "Russia",
    city: "Saint Petersburg",
    weather: "Cold",
    budget: 1600,
    size: "Big"
  },
  //Odessa
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Odessa",
    weather: "Cold",
    budget: 1200,
    size: "Mid"
  },
  //Havana
  {
    continent: "Europe",
    country: "Cuba",
    city: "Havana",
    weather: "Warm",
    budget: 1600,
    size: "Big"
  },
  //Ubud, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Ubud, Bali",
    weather: "Warm",
    budget: 1800,
    size: "Mid"
  },
  //Moscow
  {
    continent: "Europe",
    country: "Russia",
    city: "Moscow",
    weather: "Cold",
    budget: 2300,
    size: "Big"
  },
  //Casablanca
  {
    continent: "Europe",
    country: "Morocco",
    city: "Casablanca",
    weather: "Mild",
    budget: 1500,
    size: "Big"
  },
  //Dakar
  {
    continent: "Africa",
    country: "Senegal",
    city: "Dakar",
    weather: "Warm",
    budget: 1500,
    size: "Big"
  },
  //Bansko
  {
    continent: "Europe",
    country: "Bulgaria",
    city: "Bansko",
    weather: "Cold",
    budget: 1300,
    size: "Small"
  },
  //Luang Prabang
  {
    continent: "Asia",
    country: "Laos",
    city: "Luang Prabang",
    weather: "Warm",
    budget: 1300,
    size: "Small"
  },
  //Santiago
  {
    continent: "South America",
    country: "Chile",
    city: "Santiago",
    weather: "Warm",
    budget: 1400,
    size: "Big"
  },
  //Da Lat
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Lat",
    weather: "Warm",
    budget: 1000,
    size: "Mid"
  },
  //Fes
  {
    continent: "Africa",
    country: "Morocco",
    city: "Belgrade",
    weather: "Cold",
    budget: 1200,
    size: "Big"
  },
  //Marrakesh
  {
    continent: "Africa",
    country: "Morocco",
    city: "Marrakesh",
    weather: "Mild",
    budget: 1900,
    size: "Mid"
  },
  //Phnom Penh
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Phnom Penh",
    weather: "Warm",
    budget: 1200,
    size: "Big"
  },
  //Tunis
  {
    continent: "Africa",
    country: "Tunisia",
    city: "Phnom Penh",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Siem Reap
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Siem Reap",
    weather: "Warm",
    budget: 1000,
    size: "Mid"
  },
  //Mamaia
  {
    continent: "Europe",
    country: "Romania",
    city: "Mamaia",
    weather: "Cold",
    budget: 1400,
    size: "Mid"
  },
  //Uruguay
  {
    continent: "South America",
    country: "Uruguay",
    city: "Montevideo",
    weather: "Warm",
    budget: 1700,
    size: "Big"
  },
  //Hanoi
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Hanoi",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Tallinn
  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    weather: "Cold",
    budget: 2000,
    size: "Mid"
  },
  //Antalya
  {
    continent: "Asia",
    country: "Turkey",
    city: "Antalya",
    weather: "Mild",
    budget: 1100,
    size: "Big"
  },
  //La Paz
  {
    continent: "North America",
    country: "Mexico",
    city: "La Paz",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Male
  {
    continent: "Asia",
    country: "Maldives",
    city: "Male",
    weather: "Warm",
    budget: 2000,
    size: "Mid"
  },
  //Cebu
  {
    continent: "Asia",
    country: "Philippines",
    city: "Cebu",
    weather: "Warm",
    budget: 1400,
    size: "Mid"
  },
  //Palawan
  {
    continent: "Asia",
    country: "Philippines",
    city: "Palawan",
    weather: "Warm",
    budget: 1400,
    size: "Mid"
  },
  //Izmir
  {
    continent: "Asia",
    country: "Turkey",
    city: "Izmir",
    weather: "Cold",
    budget: 700,
    size: "Big"
  },
  //Split
  {
    continent: "Europe",
    country: "Croatia",
    city: "Split",
    weather: "Mild",
    budget: 2500,
    size: "Mid"
  },

  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    weather: "Cold",
    budget: 2000,
    size: "Mid"
  },
  //Taghazout
  {
    continent: "Africa",
    country: "Morocco",
    city: "Taghazout",
    weather: "Mild",
    budget: 1100,
    size: "Mid"
  },
  //Warsaw
  {
    continent: "Europe",
    country: "Poland",
    city: "Warsaw",
    weather: "Cold",
    budget: 1900,
    size: "Big"
  },
  //Makati
  {
    continent: "Asia",
    country: "Philippines",
    city: "Makati",
    weather: "Warm",
    budget: 1800,
    size: "Mid"
  },
  //Koh Lanta
  {
    continent: "Asia",
    country: "Thailand",
    city: "Koh Lanta",
    weather: "Warm",
    budget: 1500,
    size: "Small"
  },
  //Kraków
  {
    continent: "Europe",
    country: "Poland",
    city: "Kraków",
    weather: "Cold",
    budget: 1500,
    size: "Mid"
  },
  //Lviv
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Lviv",
    weather: "Cold",
    budget: 1100,
    size: "Mid"
  }
];

//LOCATION FUNCTION
// grab user input
document.querySelector("form").addEventListener("submit", function location (e) {
  e.preventDefault();

  //store list of matching cities in a variable
  let finalList = matchInput();

  //pick a random city from the list
  let randomPlace = finalList[Math.floor(Math.random() * finalList.length)];
  console.log(randomPlace);

  //open new window
  window.open("nomadDiscover2.html");

  document.querySelector("results").innerHTML = randomPlace;
});



//MATCH INPUT FUNCTION
//filter user inputs with options
function matchInput() {
  let inputContinent = document.querySelector("#continent").value;
  let inputBudget = document.querySelector("#budget").value;
  let inputWeather = document.querySelector("#weather").value;
  let inputSize = document.querySelector("#size").value;

  //continent filter
  const continentFilter = entry => {
    return entry.continent === inputContinent;
  };
  const continentsFiltered = options.filter(continentFilter);
  // console.log(continentsFiltered);

  //budget filter
  const budgetFilter = select => {
    return select.budget <= inputBudget;
  };
  const budgetFiltered = continentsFiltered.filter(budgetFilter);
  // console.log(budgetFiltered);

  //weather filter
  const weatherFilter = pick => {
    return pick.weather === inputWeather;
  };
  const weatherFiltered = budgetFiltered.filter(weatherFilter);
  // console.log(weatherFiltered);

  //size filter
  const sizeFilter = you => {
    return you.size === inputSize;
  };
  const sizeFiltered = weatherFiltered.filter(sizeFilter);
  // console.log(sizeFiltered);
  return sizeFiltered;
} //end of matchInputFunction
