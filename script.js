// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let massInput = document.querySelector("input[name=cargoMass]");
        // let isString = typeof pilotInput.value === "string";
        if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput === "") {
            alert("All fields are required!");
        }
        else if (isNaN(fuelInput.value) || isNaN(massInput.value)) {
            alert("Number is required for (L) and (kg) fields.")
            //event.preventDefault();
        }
        else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
            alert("Enter a valid name.")
        }
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
});