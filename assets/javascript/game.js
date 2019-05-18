// ============== GLOBAL VARIABLES ========================

// game counter
wins = 0;
losses = 0;
counter = 0; 

// gameNumber
var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

// console.log(gameNumber);

// link gameNumber to html
$("#game-number").text(gameNumber);

// buttons
var button1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var button2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var button3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var button4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);

// console.log(button1, button2, button3, button4);

// button images
var buttons = [button1, button2, button3, button4];
var imagePathArray = ["./assets/images/blue-crystal.png", "./assets/images/green-gem.jpg", "./assets/images/yellow-gem.jpg", "./assets/images/crystal-mineral-glass-ball.jpg"];

// assign random values to button images with values between 1 - 12
for (var i = 0; i < buttons.length; i++) {

    // for each iteration we create an image crystal
    var imageCrystal = $("<img>");

    // first each crystal will be given the class ".crystal-image"
    // this will allow the css to take effect
    imageCrystal.addClass("crystal-image");

    // each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", imagePathArray[i]);

    // each imageCrystal will be given a data attribute called data-crystal-value
    // this data attribute will be set equal to the array value
    imageCrystal.attr("data-crystal-value", buttons[i]);

    // lastly each crystal image with all its classes and attributes will get added to the page
    $("#crystals").append(imageCrystal);
}

// this click event applies to every single crystal on the page
$(".crystal-image").on("click", function() {
    // determining the crystal's value requires us to extract the value from the data attribute
    // using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal
    // using the .attr("data-crystal-value") allows us to grab the value out of the "data-crystal-value" attribute
    // since attributes on html elements are strings, we must convert it to an integer before adding to the counter
    var crystalValue = ($(this).attr("data-crystal-value"));
    crystalValue = parseInt(crystalValue);
    // we then add the crystalValue to the user's counter which is a global variable
    // every click, from every crystal adds to the global counter
    counter += crystalValue;
    // console.log(counter);
    // display counter in html
    $("#counter").text(counter);


    if (counter === gameNumber) {
        alert("you win");
        wins++;
        // display losses in html
        $("#wins").text(wins);
        // reset game
        restart();
    } 
    else if (counter > gameNumber) {
        alert("you lose");
        losses++;
        // display losses in html
        $("#losses").text(losses);
        // reset game
        restart();
    }
});


// ============== FUNCTIONS ============================

// generating a random number with (min and max) values
// function found on MDN
// function (min,max) {
    // return Math.floor(Math.random() * (max - min + 1) + min);
// }

// get gameNumber 
// function getGameNumber (19,120) {
    // return Math.floor(Math.random() * (120 - 19 + 1) + 19);

// }

// get buttonValue
// function getButtonValue (1,12) {
    // return Math.floor(Math.random() * (12 - 1 + 1) + 1));
// }

// game start 
// there is a randomly generated number between 19 - 120 (min,max)
// four buttons are assigned random hidden values between 1 - 12
    // button = [button1, button2, button3, button4]; ?
// initial score is 0 
// wins = 0
// losses = 0

// button click
// think of button value as button score
// initial score + button score = total score
// update players score counter

// game win 
// total score = randomly generated number
// increase wins by 1
// restart game

// game lose
// total score > randomly generated number
// increase losses by 1
// restart game

// restart game
// generate random number
// generate random button values
// initial score = 0
// clear display

function restart() {
    gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    button1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    button4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    counter = 0;
    $("#game-number").text(gameNumber);
    $("#counter").text(counter);
    // console.log(counter);
    // console.log(button1, button2, button3, button4);
}

// ================= MAIN PROCESSES ========================