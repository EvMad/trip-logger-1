init();

// import trip model

const nextBtn = document.querySelector("#next");
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

    if ()

    // await add trip, clear inputs, toast
}