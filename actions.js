let colors = [
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(0,255,255)",
    "rgb(255,0,255)",
    "rgb(0,255,0)",
    "rgb(0,0,255)"
]

let squares = document.getElementsByClassName("buttons");
let pickedColor = colors[3];
let colorDisplay = document.getElementById("rgbVal");
for( let i = 0 ; i<squares.length; i++){
    // set background color
    squares[i].style.backgroundColor = colors[i];
    // add event listeners 
    squares[i].addEventListener('click',() => {
        alert("hey!");
    })
}

colorDisplay.textContent = pickedColor;
