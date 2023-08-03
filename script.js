// Write your JavaScript code here!

window.addEventListener("load", function() 
{
    
let form = document.querySelector("form");

 form.addEventListener("submit",function(event)
 {
    let pilotNameInput = document.querySelector("input[name = pilotName]");
    let copilotNameInput = document.querySelector("input[name = copilotName]");
    let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
    let cargoMassInput = document.querySelector("input[name = cargoMass]");

// const launchInfo = document.getElementById ("faultyItems");
// const pilotStatus = document.getElementById ("pilotStatus");
// const copilotStatus = document.getElementById ("copilotStatus") ;
// const fuelStatus = document.getElementById ("fuelStatus") ;
// const cargoStatus = document.getElementById ("cargoStatus");


    formSubmission (pilotNameInput,copilotNameInput,fuelLevelInput,cargoMassInput );
     })

 })



   let listedPlanets ;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse = myFetch() ;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       randomPlanet = pickPlanet (listedPlanets);
       console.log (randomPlanet);  
       addDestinationInfo (randomPlanet);
    });
   
   
   
