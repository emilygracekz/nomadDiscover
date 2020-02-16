const asiaWeather = "Warm";
const southAmericaWeather = "Warm";
const europeWeather = "Cold";
const northAmericaWeather = "Cold";
const africaWeather = "Warm";

//TODO: ask about URLs
//TODO: move database to new file
//TODO: add photos
//TODO: fix north america and south america options
//TODO: fix how the result displays on the modal
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
    // url: new URL(shorturl.at/cemnU),
    // photo: xx;
  },
  //Valencia
  {
    continent: "Europe",
    country: "Spain",
    city: "Valencia",
    weather: asiaWeather,
    budget: 2250,
    size: "Big"
  },
  //Seville
  {
    continent: "Europe",
    country: "Spain",
    city: "Seville",
    weather: asiaWeather,
    budget: 2250,
    size: "Big"
  },
  //Lisbon
  {
    continent: "Europe",
    country: "Portugal",
    city: "Lisbon",
    weather: asiaWeather,
    budget: 1900,
    size: "Mid"
  },
  //Vilnius
  {
    continent: "Europe",
    country: "Lithuania",
    city: "Vilnius",
    weather: europeWeather,
    budget: 1900,
    size: "Mid"
  },
  //Porto
  {
    continent: "Europe",
    country: "Portugal",
    city: "Porto",
    weather: southAmericaWeather,
    budget: 1800,
    size: "Mid"
  },
  //Budapest
  {
    continent: "Europe",
    country: "Hungary",
    city: "Budapest",
    weather: europeWeather,
    budget: 1500,
    size: "Big"
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
    weather: europeWeather,
    budget: 2800,
    size: "Big"
  },
  //Zagreb
  {
    continent: "Europe",
    country: "Croatia",
    city: "Zagreb",
    weather: europeWeather,
    budget: 1800,
    size: "Mid"
  },
  //Buenos Aires
  {
    continent: "South America",
    country: "Argentina",
    city: "Buenos Aires",
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big"
  },
  //Ko Samui
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Samui",
    weather: asiaWeather,
    budget: 1400,
    size: "Small"
  },
  //Mexico City
  {
    continent: "South America",
    country: "Mexico",
    city: "Mexico City",
    weather: southAmericaWeather,
    budget: 1500,
    size: "Big"
  },
  //Medellín
  {
    continent: "South America",
    country: "Colombia",
    city: "Medellín",
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big"
  },
  //Canggu, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Canggu, Bali",
    weather: asiaWeather,
    budget: 1400,
    size: "Small"
  },
  //São Paulo
  {
    continent: "South America",
    country: "Brazil",
    city: "São Paulo",
    weather: southAmericaWeather,
    budget: 1600,
    size: "Big"
  },
  //Bangkok
  {
    continent: "Asia",
    country: "Thailand",
    city: "Bangkok",
    weather: asiaWeather,
    budget: 1500,
    size: "Big"
  },
  //Chaing Mai
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Chaing Mai",
    weather: asiaWeather,
    budget: 1100,
    size: "Mid"
  },
  //Da Nang
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Nang",
    weather: asiaWeather,
    budget: 1000,
    size: "Big"
  },
  //Tbilisi
  {
    continent: "Europe",
    country: "Georgia",
    city: "Tbilisi",
    weather: europeWeather,
    budget: 1300,
    size: "Big"
  },
  //Phuket
  {
    continent: "Asia",
    country: "Thailand",
    city: "Phuket",
    weather: asiaWeather,
    budget: 1700,
    size: "Mid"
  },
  //Prague
  {
    continent: "Europe",
    country: "Czechia",
    city: "Prague",
    weather: europeWeather,
    budget: 2000,
    size: "Big"
  },
  //Istanbul
  {
    continent: "Europe",
    country: "Turkey",
    city: "Istanbul",
    weather: europeWeather,
    budget: 1300,
    size: "Big"
  },
  //Cape Town
  {
    continent: "Africa",
    country: "South Africa",
    city: "Cape Town",
    weather: africaWeather,
    budget: 1800,
    size: "Mid"
  },
  //Playa del Carmen
  {
    continent: "North America",
    country: "Mexico",
    city: "Playa del Carmen",
    weather: southAmericaWeather,
    budget: 1500,
    size: "Mid"
  },
  //Taipei
  {
    continent: "Asia",
    country: "Taiwan",
    city: "Taipei",
    weather: asiaWeather,
    budget: 2000,
    size: "Big"
  },
  //Kiev
  {
    continent: "Europe",
    country: "Ukrane",
    city: "Kiev",
    weather: europeWeather,
    budget: 1800,
    size: "Big"
  },
  //Bucharest
  {
    continent: "Europe",
    country: "Romania",
    city: "Bucharest",
    weather: europeWeather,
    budget: 1500,
    size: "Big"
  },
  //Belgrade
  {
    continent: "Europe",
    country: "Serbia",
    city: "Belgrade",
    weather: europeWeather,
    budget: 1400,
    size: "Big"
  },
  //Ko Tao
  {
    continent: "Asia",
    country: "Thailand",
    city: "Ko Tao",
    weather: asiaWeather,
    budget: 1500,
    size: "Small"
  },
  //Saint Petersburg
  {
    continent: "Europe",
    country: "Russia",
    city: "Saint Petersburg",
    weather: europeWeather,
    budget: 1600,
    size: "Big"
  },
  //Odessa
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Odessa",
    weather: europeWeather,
    budget: 1200,
    size: "Mid"
  },
  //Havana
  {
    continent: "Europe",
    country: "Cuba",
    city: "Havana",
    weather: southAmericaWeather,
    budget: 1600,
    size: "Big"
  },
  //Ubud, Bali
  {
    continent: "Asia",
    country: "Indonesia",
    city: "Ubud, Bali",
    weather: asiaWeather,
    budget: 1800,
    size: "Mid"
  },
  //Moscow
  {
    continent: "Europe",
    country: "Russia",
    city: "Moscow",
    weather: europeWeather,
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
    weather: africaWeather,
    budget: 1500,
    size: "Big"
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
    size: "Small"
  },
  //Santiago
  {
    continent: "South America",
    country: "Chile",
    city: "Santiago",
    weather: southAmericaWeather,
    budget: 1400,
    size: "Big"
  },
  //Da Lat
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Da Lat",
    weather: asiaWeather,
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
    weather: asiaWeather,
    budget: 1200,
    size: "Big"
  },
  //Tunis
  {
    continent: "Africa",
    country: "Tunisia",
    city: "Tunis",
    weather: "Warm",
    budget: 1000,
    size: "Big"
  },
  //Siem Reap
  {
    continent: "Asia",
    country: "Cambodia",
    city: "Siem Reap",
    weather: asiaWeather,
    budget: 1000,
    size: "Mid"
  },
  //Mamaia
  {
    continent: "Europe",
    country: "Romania",
    city: "Mamaia",
    weather: europeWeather,
    budget: 1400,
    size: "Mid"
  },
  //Uruguay
  {
    continent: "South America",
    country: "Uruguay",
    city: "Montevideo",
    weather: southAmericaWeather,
    budget: 1700,
    size: "Big"
  },
  //Hanoi
  {
    continent: "Asia",
    country: "Vietnam",
    city: "Hanoi",
    weather: asiaWeather,
    budget: 1000,
    size: "Big"
  },
  //Tallinn
  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    weather: europeWeather,
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
    weather: southAmericaWeather,
    budget: 1000,
    size: "Big"
  },
  //Male
  {
    continent: "Asia",
    country: "Maldives",
    city: "Male",
    weather: asiaWeather,
    budget: 2000,
    size: "Mid"
  },
  //Cebu
  {
    continent: "Asia",
    country: "Philippines",
    city: "Cebu",
    weather: asiaWeather,
    budget: 1400,
    size: "Mid"
  },
  //Palawan
  {
    continent: "Asia",
    country: "Philippines",
    city: "Palawan",
    weather: asiaWeather,
    budget: 1400,
    size: "Mid"
  },
  //Izmir
  {
    continent: "Asia",
    country: "Turkey",
    city: "Izmir",
    weather: europeWeather,
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
  //Tallinn
  {
    continent: "Europe",
    country: "Estonia",
    city: "Tallinn",
    weather: europeWeather,
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
    weather: europeWeather,
    budget: 1900,
    size: "Big"
  },
  //Makati
  {
    continent: "Asia",
    country: "Philippines",
    city: "Makati",
    weather: asiaWeather,
    budget: 1800,
    size: "Mid"
  },
  //Koh Lanta
  {
    continent: "Asia",
    country: "Thailand",
    city: "Koh Lanta",
    weather: asiaWeather,
    budget: 1500,
    size: "Small"
  },
  //Kraków
  {
    continent: "Europe",
    country: "Poland",
    city: "Kraków",
    weather: europeWeather,
    budget: 1500,
    size: "Mid"
  },
  //Lviv
  {
    continent: "Europe",
    country: "Ukraine",
    city: "Lviv",
    weather: europeWeather,
    budget: 1100,
    size: "Mid"
  }
];

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
  console.log(continentsFiltered);

  //budget filter
  const budgetFilter = select => {
    return select.budget <= inputBudget;
  };
  const budgetFiltered = continentsFiltered.filter(budgetFilter);
  console.log(budgetFiltered);

  //weather filter
  const weatherFilter = pick => {
    return pick.weather === inputWeather;
  };
  console.log(weatherFilter);
  const weatherFiltered = budgetFiltered.filter(weatherFilter);
  console.log(weatherFiltered);

  // size filter
  const sizeFilter = you => {
    return you.size === inputSize;
  };
  const sizeFiltered = weatherFiltered.filter(sizeFilter);
  console.log(sizeFiltered);
  return sizeFiltered;
} //end of matchInputFunction

//grab modal parts
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

//handle the submission, populate modal
function onSubmit(e) {
  e.preventDefault();
  let finalList = matchInput();

  //reset the form
  e.target.reset();

  //pick a random city from the list
  let randomPlace = finalList[Math.floor(Math.random() * finalList.length)];
  JSON.stringify(randomPlace);
  console.log(randomPlace);

  //populate the modal with new info
  modalInner.innerHTML = `<p>You should go to ${randomPlace.city}, ${randomPlace.country}!</p>`;

  //show modal
  modalOuter.classList.add("open");

  //close the model when clicked out or esc is pressed
  function closeModal() {
    modalOuter.classList.remove("open");
  }
  
  modalOuter.addEventListener("click", function(event) {
    const isOutside = !event.target.closest(".modal-inner");
    if (isOutside) {
      modalOuter.classList.remove("open");
    }
  });
  
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
  //end of modals 
}

document.querySelector("form").addEventListener("submit", onSubmit);


