"use strict";
console.log("Hello World");


let destinations = ["New York","Hawaii","Italy", "Australia","Japan","Germany","Greenland"];
let resturants = ["Mc Donalds", "Joe's Italian Resturant", "Big John's Seafood Joint", "Chinese Dragon","Burger King","KFC","Korean BBQ"];
let modeOfTravel = ["in a car", "on a train", "on a bike", "on a plane","on foot","in a helicopter"];
let entertainment = ["go to the movies","go bowling","go sightseeing","go hiking","go to the beach","go to bars"];
let randomVacation = [];

function destinationGenerator(){
    let randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    randomVacation[0] = randomDestination;
    return randomDestination;
}
let randomDestination = destinationGenerator();

function resturantGenerator(){
    let randomResturant = resturants[Math.floor(Math.random() * resturants.length)];
    randomVacation[1] = randomResturant;
    return randomResturant;
}
let randomResturant = resturantGenerator();

function modeOfTravelGenerator(){
    let randomModeOfTravel = modeOfTravel[Math.floor(Math.random() * modeOfTravel.length)];
    randomVacation[2] = randomModeOfTravel;
    return randomModeOfTravel;
}
let randomModeOfTravel = modeOfTravelGenerator();

function entertainmentGenerator(){
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
    randomVacation[3] = randomEntertainment;
    return randomEntertainment;
}
let randomEntertainment = entertainmentGenerator();

function randomVacationGenerator(){
    let randomVacationMessage = "Your vacation is in " + randomDestination + ", you will be eating " + randomResturant
    + ", you will travel " + randomModeOfTravel + ", and you will " + randomEntertainment + " for fun.";
    return randomVacationMessage
}
let randomVacationMessage = randomVacationGenerator();
console.log(randomVacationMessage);


function isUserHappy() {
    let satisfactionCheck = prompt("Are you happy with your random vacation? If yes type 'yes' or type 'no'.")
    if (satisfactionCheck === "yes"){
        return;
    }
    else if (satisfactionCheck === "no"){
        let rerollQuestion = prompt("Which part of your vacation would you like to reroll?(destination,resturant,transportation,entertaintment)")
        if (rerollQuestion ==="destination"){
            let randomDestination = destinationGenerator();
            alert(randomDestination);
            isUserHappy(); 
            
        }
        else if (rerollQuestion ==="resturant"){
            let randomResturant = resturantGenerator()
            alert(randomResturant);
            isUserHappy();
        }
        else if (rerollQuestion ==="transportation"){
            let randomModeOfTravel = modeOfTravelGenerator();
            alert(randomModeOfTravel);
            isUserHappy();
        }
        else if (rerollQuestion ==="entertainment"){
            let randomEntertainment = entertainmentGenerator();
            alert(randomEntertainment);
            isUserHappy();
        }
        else {
            isUserHappy();
        }
    }
    else {
        isUserHappy();
    }
  let completedVacation = "Your vacation is in " + randomVacation[0] + ", you will be eating " + randomVacation[1]
  + ", you will travel " + randomVacation[2] + ", and you will " + randomVacation[3] + " for fun.";
  return completedVacation;
}
let completedVacation = isUserHappy();
console.log(completedVacation);
console.log("Trip Completed")