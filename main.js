const GRID_SIZE = 256;

let container = document.querySelector(".container");
container.style.display = 'none';

const page = document.querySelector(".page");

let gridSquares = document.getElementsByClassName("squares");
let MODE = 'color';
let title = document.querySelector("#title");
let colorBtn = document.querySelector("#colorMode");
let eraserBtn = document.querySelector("#erase");
let clearBtn = document.querySelector("#clearBtn");
let blackBtn = document.querySelector('#blackBtn');
let addContainer = document.createDocumentFragment();
let colorInput = document.querySelector("#color");
let currentColor = '#333333';

function setCurrentColor(newColor){
    currentColor = newColor;
}
function setMode(newMode){
    MODE = newMode;
}
function clearGrid(){
    for(const gridSquare of gridSquares){
        gridSquare.style.backgroundColor = '#fefefe';
    }
}
function setCurrentGrid(newGrid){

}
function blackTakeOver(){
    for(const gridSquare of gridSquares){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        ;
    }
}
colorInput.oninput = (e) => setCurrentColor(e.target.value);


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let startBtn = document.createElement('button');
startBtn.id = "start";
startBtn.textContent = "Start Sketching";
title.appendChild(startBtn);

startBtn.addEventListener('click', (e) => {showGrid(); title.removeChild(startBtn); container.style.display = 'flex'})
eraserBtn.addEventListener('click', () => setMode('eraser'))
colorBtn.addEventListener('click', () => setMode('color'))
clearBtn.addEventListener('click', () => clearGrid())
blackBtn.addEventListener('click', () => blackTakeOver())

function showGrid(){    
for(let i = 0; i < GRID_SIZE; i++){
        let div = document.createElement('div');
        div.className = "squares";
        addContainer.appendChild(div);
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mousedown', changeColor);
    }
container.appendChild(addContainer)
}
function changeColor(e){
   if(e.type ==='mouseover' && !mouseDown) return 
    if(MODE == 'color'){
    e.target.style.backgroundColor = currentColor
    }else if(MODE == 'eraser'){
    e.target.style.backgroundColor = '#fefefe'
    }
}
