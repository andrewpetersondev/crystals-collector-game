console.log("beginning of logic");

// GLOBAL VARIABLES 
// ==================================================================

// crystal variables
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    }
};

// scores (current and target)
var currentScore = 0;
var targetScore = 0;

// wins and losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// ======================================================================
// helper function for getting random values
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// starts and restarts the game
var startGame = function () {
    // reset current score
    currentScore = 0;
    // set new target score
    targetScore = getRandom(19, 120);
    // set diff values for each crystal between 1 and 12
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);

    // change html to reflect changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // testing and debugging
    console.log("------------------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + "| Red: " + crystal.red.value + "| Green: " + crystal.green.value + "| Yellow: " + crystal.yellow.value);
    console.log("------------------------------------------");

};

// responds to crystals being clicked
var addValues = function (crystal) {

    // change current score
    currentScore = currentScore + crystal.value;

    // update html to show changes in current score
    $("#yourScore").html(currentScore);

    // call the check win function
    checkWin();

    // testing and debugging
    console.log("Your Score : " + currentScore);

};

// check if user won or lost and reset the game
var checkWin = function () {

    // check if the current score is larger than the target score
    if (currentScore > targetScore) {
        alert("you lost");
        console.log("you lost");

        // add to loss counter
        lossCount++;

        // change loss count on html
        $("#losses").html(lossCount);

        // restart the game
        startGame();


    }
    else if (currentScore === targetScore) {
        alert("you win");

        // add to win counter
        winCount++;

        // change win count on html
        $("#wins").html(winCount);

        // restart the game
        startGame();

    }


};

// MAIN PROCESSES 
// ==========================================================================
// starts the game the first time
startGame();

$("#blue").click(function () {

    addValues(crystal.blue);

});

$("#green").click(function () {

    addValues(crystal.green);

});

$("#yellow").click(function () {

    addValues(crystal.yellow);

});

$("#red").click(function () {

    addValues(crystal.red);

});
