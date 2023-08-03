// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(planet) {
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = ` <h2> Mission Destination </h2>
   <ol>
       <li>Name: ${planet.name} </li>
       <li>Diameter:${planet.iameter} </li>
       <li>Star: ${planet.star}</li>
       <li>Distance from Earth:${planet.distance} </li>
       <li>Number of Moons: ${planet.moons} </li>
   </ol>
   <img src="${planet.image}">`
   
   
    // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}



function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN (Number(testInput))) {
        return "Not a number"; 
    } else {
        return "Is a number";
    }
   
}


function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
    event.preventDefault();
    const launchInfo = document.getElementById ("faultyItems");
    const launchStatus = document.getElementById ("launchStatus");
    // const fuelStatus = document.getElementById ("fuelStatus");
    // const cargoStatus = document.getElementById ("cargoStatus");
        // launchInfo.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;


    if (validateInput(pilot.value) !== "Empty" && 
    validateInput(pilot.value) !== "Is a number" &&
    validateInput(copilot.value)!== "Empty" &&
    validateInput(copilot.value)!== "Is a number" && 
    validateInput(fuelLevel.value) !== "Empty" &&
    validateInput(fuelLevel.value) !== "Not a number" &&
    fuelLevel.value >= 10000 &&    
    validateInput(cargoLevel.value) !== "Empty" &&
    validateInput(cargoLevel.value) !== "Not a number" &&
    cargoLevel.value <= 10000 ) 

     {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        fuelStatus.innerHTML  = "Fuel level high enough for launch";
        cargoStatus.innerHTML =  "Cargo mass low enough for launch";
        launchInfo.style.visibility = "visible"; 
        launchStatus.style.color = "#419F6A"}



    else if (
        validateInput(pilot.value) === "Empty" ||
        validateInput(copilot.value) === "Empty" || 
        validateInput(fuelLevel.value) === "Empty" || 
        validateInput(cargoLevel.value) === "Empty"
        ) 
        {alert ("All fields are required");
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
        launchInfo.style.visibility = "hidden"; 
    }

    else if (
        validateInput(pilot.value) === "Is a number" ||
        validateInput(copilot.value) === "Is a number" ||
        validateInput(fuelLevel.value) === "Not a number" ||
        validateInput(cargoLevel.value) === "Not a number"
        )
        { alert ("Please enter valid data");
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
        launchInfo.style.visibility = "hidden";
    }

    else if (fuelLevel.value < 10000)
        {
        fuelStatus.innerHTML = "There is not enough fuel for launch"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style.color = "#C7254E"
        launchInfo.style.visibility = "visible";  
    
    }

       else if (cargoLevel.value > 10000)
        {
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";
        launchInfo.style.visibility = "visible"; 
    }   
        
      
    }
 
    
    
    
        


     

         

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function(response){return response.json();
    })
            
    return planetsReturned;
}



function pickPlanet(planets) {
       
    const randomPlanetIndex = Math.floor(Math.random()* planets.length);
    const randomPlanet = planets[randomPlanetIndex];

    return randomPlanet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

