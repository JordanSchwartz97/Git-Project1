"use strict";
console.log('Hello World');

let destinations = ["New York","Hawaii","Italy", "Australia"];
let resturants = ["Mc donalds", "Joe's Italian Resturant", "Big John's seafood joint", "Chinese Dragon"];
let modeOfTravel = ["Car", "Train", "Bike", "Plane"];
let entertainment = ["Movies","Bowling","Sightseeing","Hiking"];

function destinationGenerator(){
    let randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    return randomDestination;
}
let randomDestination = destinationGenerator();

function resturantGenerator(){
    let randomResturant = resturants[Math.floor(Math.random() * resturants.length)];
    return randomResturant;
}
let randomResturant = resturantGenerator();

function modeOfTravelGenerator(){
    let randomModeOfTravel = modeOfTravel[Math.floor(Math.random() * modeOfTravel.length)];
    return randomModeOfTravel;
}
let randomModeOfTravel = modeOfTravelGenerator();

function entertainmentGenerator(){
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
    console.log(randomEntertainment);
    return randomEntertainment;
}
let randomEntertainment = entertainmentGenerator();

function randomVacationGenerator(){
    let randomVacation = "Your vacation is in " + randomDestination + ", You will be eating " + randomResturant
    + ", You will travel in a " + randomModeOfTravel + ", You will do " + randomEntertainment + " for fun.";
    console.log(randomVacation);
    return randomVacation
}
let randomVacation = randomVacationGenerator();