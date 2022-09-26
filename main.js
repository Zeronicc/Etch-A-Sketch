const GRID_SIZE = 256;
let container = document.querySelector(".container");
const page = document.querySelector(".page");

let MODE = 'color';
let title = document.querySelector("#title");
let colorBtn = document.querySelector("#colorMode");
let eraserBtn = document.querySelector("#erase");
let clearBtn = document.querySelector("#clearBtn");
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
    container.innerHTML = ''
}

colorInput.oninput = (e) => setCurrentColor(e.target.value);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let startBtn = document.createElement('button');
startBtn.id = "start";
startBtn.textContent = "Start Sketching";
title.appendChild(startBtn);

startBtn.addEventListener('click', (e) => {showGrid(); title.removeChild(startBtn)})
eraserBtn.addEventListener('click', () => setMode('eraser'))
colorBtn.addEventListener('click', () => setMode('color'))
clearBtn.addEventListener('click', () => clearGrid())

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
