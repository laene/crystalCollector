//These are my global variables relating to winning conditions
var wins = 0;
var losses = 0;
var userScore = 0;
var targetScore = 0;
var victory = false;

//Now I'm storing the crystal values (currently 0) in an object.
var crystals = {
    crystalRed: 0,
    crystalBlue: 0,
    crystalYellow: 0,
    crystalClear: 0
}

//START OF GAME function
function gameStart() {
    //Stores a randomly determined score target approximately between 19 and 120
    targetScore = Math.floor(Math.random()* 100+19);
    //Prints targetScore to appropriate div on screen
    $("#game-target-score").text(targetScore);

    //Stores new randomly determined values for each global crystal
    crystals.crystalRed = Math.floor(Math.random()* 12+1);
    crystals.crystalBlue = Math.floor(Math.random()* 12+1);
    crystals.crystalYellow = Math.floor(Math.random()* 12+1);
    crystals.crystalClear = Math.floor(Math.random()* 12+1);
    console.log(crystals);

    //Prints user score to appropriate div on screen
    $("#game-score").text(userScore);
};

// function crystalClicks() {
    
// }


//This function listens for user clicks after the page has loaded.
window.onload = function now() {
    gameStart();
    $("#crystal-red").on('click', function() {
        console.log("red clicked!");
        userScore = userScore + crystals.crystalRed;
        console.log(userScore);
    })
    $("#crystal-blue").on('click', function() {
        console.log("blue clicked!");
        userScore = userScore + crystals.crystalBlue;
        console.log(userScore);
    })
    $("#crystal-yellow").on('click', function() {
        console.log("yellow clicked!");
        userScore = userScore + crystals.crystalYellow;
        console.log(userScore);
    })
    $("#crystal-clear").on('click', function() {
        console.log("clear clicked!");
        userScore = userScore + crystals.crystalClear;
        console.log(userScore);
    })
    
}