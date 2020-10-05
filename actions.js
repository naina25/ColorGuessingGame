let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
];

let squares = document.querySelectorAll(".buttons");
let pickedColor = colors[3];
let colorDisplay = document.querySelector('#rgbVal');
let displayMessage = document.querySelector('#message');

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
