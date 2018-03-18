$( document ).ready(function() {

var wins = 0;
var losses = 0;
var minCrystal = 1;
var maxCrystal = 12;
var minRandom = 19;
var maxRandom = 120;

function getRndCrystal(minCrystal, maxCrystal) {
    return Math.floor(Math.random() * (maxCrystal - minCrystal + 1) ) + minCrystal;
}

function getRndNumber(minRandom, maxRandom) {
    return Math.floor(Math.random() * (maxRandom - minRandom + 1) ) + minRandom;
}


var randomCrystal1;
var randomCrystal2;
var randomCrystal3;
var randomCrystal4;
var randomNumber;

//function to start a game on each win/lose
function startGame() {
    //randomize crystal numbers and random number on each game start

    var randomCrystal1 = getRndCrystal(minCrystal, maxCrystal);
    console.log(randomCrystal1);
    
    var randomCrystal2 = getRndCrystal(minCrystal, maxCrystal);
    console.log(randomCrystal2);

    var randomCrystal3 = getRndCrystal(minCrystal, maxCrystal);
    console.log(randomCrystal3);

    var randomCrystal4 = getRndCrystal(minCrystal, maxCrystal);
    console.log(randomCrystal4);

    var randomNumber = getRndNumber(minRandom, maxRandom);
    console.log(randomNumber);
}

startGame();

});