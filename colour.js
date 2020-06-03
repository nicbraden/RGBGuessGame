let numberOfSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDislpay = document.getElementById("colourDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeBtns();
    setUpSquares();
    reset();
}

function setUpModeBtns() {
    for (i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6);
            reset();
        })
    }
}

function setUpSquares() {
    for (i = 0; i < squares.length; i++) {
        //add inital colours to squares 
        squares[i].style.backgroundColor = colours[i];

        //add event listener to squares 
        squares[i].addEventListener("click", function () {
            //grab colour of clicked colour
            let clickedColour = this.style.backgroundColor;
            //compare colour to picked colour
            if (clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                //change text on button
                resetBtn.textContent = "Play Again?"
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    //generate all new colours 
    colours = generateRandomColours(numberOfSquares);
    //pick new random colour
    pickedColour = pickColour();
    //change colour display to match colour picked
    colourDislpay.textContent = pickedColour;
    resetBtn.textContent = "New Colours";
    messageDisplay = "";
    //change colours of squares
    for (i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function () {
    reset();
})

function generateRandomColours(num) {
    //make an array 
    let arr = [];
    //add num random colours to array 
    for (i = 0; i < num; i++) {
        //get random colour and push into array
        arr.push(randomColour());
    }
    //return array
    return arr;
}

function randomColour() {
    //pick a red, green and blue from 0 - 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColours(colour) {
    for (i = 0; i < squares.length; i++) {
        //change each colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    let random = Math.floor(Math.random() * colours.length);
    return colours[random];
}