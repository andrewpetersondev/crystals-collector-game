// GLOBAL VARIABLES 
// ==================================================================
var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

// buttons
var button1 = Math.floor(Math.random() * 12 + 1);
var button2 = Math.floor(Math.random() * 12 + 1);
var button3 = Math.floor(Math.random() * 12 + 1);
var button4 = Math.floor(Math.random() * 12 + 1);

// button values array
var buttonValues = [button1, button2, button3, button4];

// button images
var imagePathArray = ["./assets/images/blue-crystal.png", "./assets/images/green-gem.jpg", "./assets/images/yellow-gem.jpg", "./assets/images/crystal-mineral-glass-ball.jpg"];

// output to html
$("#game-number").text(gameNumber);

// game counters
wins = 0;
losses = 0;
counter = 0;

// testing and debugging
console.log("Starting Game Number = " + gameNumber);
console.log("Button Values : " + buttonValues);

// display images 
for (var i = 0; i < buttonValues.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imagePathArray[i]);
    imageCrystal.attr("data-crystal-value", buttonValues[i]);
    $("#crystals").append(imageCrystal);
}

// FUNCTIONS
// ======================================================================
function restart() {
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    button1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    buttonValues = [button1, button2, button3, button4];
    counter = 0;
    $("#game-number").text(gameNumber);
    $("#counter").text(counter);
    console.log("New Game Number " + gameNumber);
    console.log("Button Values : " + buttonValues);
}
// MAIN PROCESSES 
// ==========================================================================

// this click event applies to every single crystal on the page
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystal-value"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("Counter = " + counter);
    $("#counter").text(counter);
    if (counter === gameNumber) {
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
        restart();
    }
    // if (counter < gameNumber) {}
    // else if (counter === gameNumber) {}
    // else (counter > gameNumber) {}
    else if (counter > gameNumber) {
        alert("You Lose!");
        losses++;
        $("#losses").text(losses);
        restart();
    }
});
