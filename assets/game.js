//These are my global variables relating to winning conditions
var wins = 0;
var losses = 0;
var userScore = 0;
var targetScore = 0;

//Now I'm globally storing the crystal values (currently 0)

var crystalRed = 0;
var crystalBlue = 0;
var crystalYellow = 0;
var crystalClear = 0;


//START OF GAME function
function gameStart() {
    //Stores a randomly determined score target approximately between 19 and 120
    targetScore = Math.floor(Math.random()* 100+19);
    //Prints targetScore to appropriate div on screen
    $("#game-target-score").text(targetScore);

    //Stores new randomly determined values for each global crystal
    crystalRed = Math.floor(Math.random()* 12+1);
    crystalBlue = Math.floor(Math.random()* 12+1);
    crystalYellow = Math.floor(Math.random()* 12+1);
    crystalClear = Math.floor(Math.random()* 12+1);

    //Prints user score to appropriate div on screen
    userScore = 0;
    $("#game-score").text(userScore);

    //Prints new losses and wins count to screen
    $("#losses").text(losses);
    $("#wins").text(wins);
};

//This function determines if the user is a clever clever winner or just some loser
function winningConditions() {
    //First it updates the score, though :)
    $("#game-score").text(userScore);
    if (userScore > targetScore) {
        console.log("YOU LOST!!!");
        losses++;
        gameStart();
    }
    if (userScore === targetScore) {
        console.log ("YOU WON!!!");
        wins++;
        gameStart();
    }
}


//This function listens for user clicks after the page has loaded.
window.onload = function now() {
    gameStart();
    //If the red crystal is clicked, add the value for red crystals
    $("#crystal-red").on('click', function() {
        console.log("red clicked!");
        userScore = userScore + crystalRed;
        console.log(userScore);
        winningConditions();
    })
    //If the blue crystal is clicked, add the value for blue crystals
    $("#crystal-blue").on('click', function() {
        console.log("blue clicked!");
        userScore = userScore + crystalBlue;
        console.log(userScore);
        winningConditions();
    })
    //If the yellow crystal is clicked, add the value for yellow crystals
    $("#crystal-yellow").on('click', function() {
        console.log("yellow clicked!");
        userScore = userScore + crystalYellow;
        console.log(userScore);
        winningConditions();
    })
    //If the clear crystal is clicked, add the value for clear crystals
    $("#crystal-clear").on('click', function() {
        console.log("clear clicked!");
        userScore = userScore + crystalClear;
        console.log(userScore);
        winningConditions();
    })
    
}