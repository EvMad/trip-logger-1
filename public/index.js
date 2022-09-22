init();

// import trip model

const addBtn = document.querySelector("#add");
const dateInput = document.querySelector("#date");
const countryInput = document.querySelector("#country");
const regionInput = document.querySelector("#region");
const cityInput = document.querySelector("#city");

let tripInput = null;


// async function to recall trip data on init 

async function initTrips() {
    let trip;

    if (location.search.split("=")[1] === undefined) {
        trip = await API.createTrip()
        console.log(trip)
    }
    if (trip) {
        location.search = "?id" + trip._id;
    }
}

initTrips();


// form submit function

async function handleFormSubmit(event) {
    event.preventDefault();

    let tripData = {};

    if (tripInput !== null) {
        tripData.country.date = dateInput.value.trim();
        tripData.country.countryName = countryInput.value.trim();
        tripData.country.region = regionInput.value.trim();
        tripData.country.city = cityInput.value.trim();
    }

    await API.addTrip(tripData);


    addBtn.addEventListener("click", handleFormSubmit);


    clearInputs();
    //add toast here

    
}

// event listeners for add button handleFormSubmit and clearInputs



function clearInputs() {
    dateInput.value = "";
    countryInput.value = "";
    regionInput.value = "";
    cityInput.value = "";
}



