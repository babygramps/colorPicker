var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".modeBtn");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

// set up squares
function setUpSquares(){
    for(var i = 0; i < squares.length; i++) {
        // add click listeners to squares
            squares[i].addEventListener("click", function(){
        // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again";
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
            });
        }
}

// mode button event listeners
function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // modeButtons[i].classList.remove("selected");
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Hard") {
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }
}

// reset button logic
function reset(){
        // generate new random colors
            colors = generateRandomColors(numSquares);
        // pick a new random color from arr
            pickedColor = pickColor();
        // change color display to match pickedColor
            colorDisplay.textContent = pickedColor;
        // reset message display
            messageDisplay.textContent = "";
            resetButton.textContent = "new colors"    
        // change color of squares
            for (var i = 0; i < squares.length; i++){
                if(colors[i]){
                    squares[i].style.display = "block";
                    squares[i].style.background = colors[i];
                } else{
                    squares[i].style.display = "none";
                }
            }
        // reset h1 background color
            h1.style.backgroundColor = "steelblue";
}

// assign reset button logic to reset button
resetButton.addEventListener("click", function(){
    reset();
});

// apply new colors to squares
function changeColors(color) {
// loop through all squares
    for (var i = 0; i < squares.length; i++) {
// change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

// assign winning color to var colors
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generate array of random rgb colors
function generateRandomColors(num) {
// make an array
    var arr = [];
// add num random colors to array
    for(var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())
    }
// return that array
    return arr;
}

// generate random values for vars r g and b
function randomColor () {
// pick a red 0 - 255
    var r = Math.floor( Math.random() * 256);
// pick a blue 0 - 255
    var b = Math.floor( Math.random() * 256);
// pick a green 0 - 255
    var g = Math.floor( Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}