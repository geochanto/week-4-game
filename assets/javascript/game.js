$( document ).ready(function() {

var wins = 0;
var losses = 0;
var minCrystal = 1;
var maxCrystal = 12;
var minRandom = 19;
var maxRandom = 120;
var totalScore = 0;
var currentCrystalValue = 0;
var randomNumber;

//Randomize crystal values between min & max values
function getRndCrystal(minCrystal, maxCrystal) {
    return Math.floor(Math.random() * (maxCrystal - minCrystal + 1) ) + minCrystal;
}

//Randomize the random number user sees at the start of the game
function getRndNumber(minRandom, maxRandom) {
    return Math.floor(Math.random() * (maxRandom - minRandom + 1) ) + minRandom;
}

//function to start the game on each win/lose
function startGame() {
    //reset total score to zero
    totalScore = 0;

    //randomize random number on each game start & display in div
    randomNumber = getRndNumber(minRandom, maxRandom);
    $('#random-num').html('Random Number: ' + randomNumber);

    //attach random crystal number to each crystal divs 
    $(".crystal").each(function(){
        $(this).attr("data-value",getRndCrystal(minCrystal, maxCrystal));
    });
}

//gather value of clicks on each crystal
$('.crystal').click(function() {
    //get the value of currently clicked crystal
    currentCrystalValue = parseInt($(this).attr('data-value'));

    //calculate current total score
    totalScore += currentCrystalValue;
    $('#score').html('Your Total Score is: ' + totalScore);

    //if total score exceeds random number, count as a loss and restart the game
    if (totalScore > randomNumber) {
        losses++;
        startGame();
        $('#losses').html('Losses: ' + losses);    
        $('#score').html('Your Total Score is: ' + totalScore);
    }

    //if total score equals random number, count as a win and restart the game
    else if (totalScore === randomNumber) {
        wins++;
        startGame();
        $('#wins').html('Wins: ' + wins);      
        $('#score').html('Your Total Score is: ' + totalScore);
    }

    else {
        return false;
    }
});

startGame();

});