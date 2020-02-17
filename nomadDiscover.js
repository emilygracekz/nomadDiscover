// JS modules (es6, see https://exploringjs.com/es6/ch_modules.html)
import options from './nomadDiscoverDatabase'
//match input to database

let inputContinent = document.querySelector("#continent").value;
  let inputBudget = document.querySelector("#budget").value;
  let inputWeather = document.querySelector("#weather").value;
  let inputSize = document.querySelector("#size").value;


function matchInput() {
  // let inputContinent = document.querySelector("#continent").value;
  // let inputBudget = document.querySelector("#budget").value;
  // let inputWeather = document.querySelector("#weather").value;
  // let inputSize = document.querySelector("#size").value;

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
  if (finalList.length === 0) {
    modalInner.innerHTML = `<p>Your input didn't match any cities! Maybe you should be less picky 😉</p>`;  
  
  //show modal
  modalOuter.classList.add("open");
  }

  //reset the form
  e.target.reset();

  //pick a random city from the list
  let randomPlace = finalList[Math.floor(Math.random() * finalList.length)];
  JSON.stringify(randomPlace);
  console.log(randomPlace);

  //populate the modal with new info
  modalInner.innerHTML = `<p>You should go to ${randomPlace.city}, ${randomPlace.country}! Check it out on NomadList: ${randomPlace.url}</p>`;

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


