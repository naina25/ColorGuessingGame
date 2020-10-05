let colors = [];
let squares = document.querySelectorAll(".buttons");
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#rgbVal');
let displayMessage = document.querySelector('#message');

generateRandomColors();

colorDisplay.textContent = pickedColor;
for( let i = 0 ; i<squares.length; i++){
    // set background color
    squares[i].style.backgroundColor = colors[i];
    // add event listeners 
    squares[i].addEventListener("click",function(){
        // grab the bg color of clicked square
        let clickedSquare = this.style.backgroundColor;
        // compare color to the pickedcolor
        if(clickedSquare === pickedColor){
            alert('right!');
            displayMessage.textContent = "Correct";
            changeColors(pickedColor);
        }
        else{
            this.style.backgroundColor = "rgb(5, 4, 4)";
            displayMessage.textContent = "Incorrect!";
        }
    });
}

// function to change colors of squares
function changeColors(color){
    squares.forEach(function(el){
        el.style.backgroundColor = color;
    })
}

// function to pick a random color from colors array
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomNum(){
    return Math.floor(Math.random() * 256);
}

function generateRandomColors(){
    for( let i = 0; i<6; i++){
        let red = randomNum();
        let green = randomNum();
        let blue = randomNum();
        var colorString = `rgb(${red}, ${green}, ${blue})`;
        colors.push(colorString);
    }   
}
