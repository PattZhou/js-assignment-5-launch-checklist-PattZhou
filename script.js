window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {


        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let massInput = document.querySelector("input[name=cargoMass]");

        let launchStatus = document.getElementById('launchStatus');
        let faultyItems = document.getElementById('faultyItems');
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');

        if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput === "") {
            alert("All fields are required!");
        } else if (isNaN(fuelInput.value) || isNaN(massInput.value)) {
            alert("Number is required for (L) and (kg) fields.")
            event.preventDefault();
        }
        // else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
        //     alert("Enter a valid name.")
        // }

        if (isNaN(pilotInput.value) && isNaN(copilotInput.value)) {
            faultyItems.style.visibility = 'visible';
            pilotStatus.innerHTML = `Pilot ${pilotInput.value} ready.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotInput.value} ready.`;
        } else {
            alert("Enter a valid name.")
            event.preventDefault();
        }

        if (fuelInput.value < 10000) {
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = "Not enough fuel for launch!";
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = 'red';
            event.preventDefault();

        }
        // else {
        //     // faultyItems.style.visibility = 'visible';
        //     event.preventDefault();
        // }

        if (massInput.value > 10000) {
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = "Too much mass for the shuttle to take off!"
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = 'red';
            event.preventDefault();
        }
        // else {
        //     // faultyItems.style.visibility = 'visible';
        //     event.preventDefault();
        // }

        if (fuelInput.value >= 10000 && massInput.value <= 10000) {
            faultyItems.style.visibility = 'visible';
            launchStatus.innerHTML = "Shuttle ready for launch!";
            launchStatus.style.color = 'green';
            fuelStatus.innerHTML = "Enough fuel for launch!";
            cargoStatus.innerHTML = "Mass low enough for launch!";
            event.preventDefault();
        }
    });


    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        // Access the JSON in the response
        response.json().then(function (json) {
            let index = Math.floor(Math.random() * json.length);
            let missionDiv = document.getElementById("missionTarget");
            missionDiv.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name} </li>
                    <li>Diameter: ${json[index].diameter} </li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance} </li>
                    <li>Number of Moons: ${json[index].moons} </li>
                </ol>
                <img src="${json[index].image}">
                `
            // console.log(json);
        });
    });
});