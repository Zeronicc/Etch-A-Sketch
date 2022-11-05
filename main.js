
// Selected elements in HTMl
const page = document.querySelector(".page");
const gridSquares = document.getElementsByClassName("squares");
const title = document.querySelector(".title");
const colorBtn = document.querySelector("#colorMode");
const eraserBtn = document.querySelector("#erase");
const clearBtn = document.querySelector("#clearBtn");
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorInput = document.querySelector("#color");
const container = document.querySelector(".container");
const modeSelect = document.querySelector(".mode-select")

let addContainer = document.createDocumentFragment();
let MODE = 'eraser';
let currentColor = '#333333';

// Makes elements inside "disappear"
container.style.display = 'none';
modeSelect.style.display = 'none';

//Gets color value from input
colorInput.oninput = e => setCurrentColor(e.target.value);

//Makes the cursor able to drag like paint on the grid
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Info for the start button in the beginning
let startBtn = document.createElement('button');
startBtn.id = "start";
startBtn.textContent = "Get Started";
title.parentNode.insertBefore(startBtn, title.nextSibling);

// All button event listeners
startBtn.addEventListener('click', (e) => { showOptions(); showGrid(16); showElements();});
eraserBtn.addEventListener('click', () => setMode('eraser'));
colorBtn.addEventListener('click', () => setMode('color'));
clearBtn.addEventListener('click', () => clearGrid());
rainbowBtn.addEventListener('click', () => setMode('rainbowMode'));

// Create and fixes the "squares" inside the selected grid
function showGrid(gridSize){    
    container.innerHTML = '';
    let grid = gridSize * gridSize;
    for(let i = 0; i < grid; i++){
        let div = document.createElement('div');
        div.className = "squares";
        addContainer.appendChild(div);
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mousedown', changeColor);
    }
container.appendChild(addContainer)
}

// Makes button for grid size and appends them to run with showGrid()
function showOptions(){
    const btnContainer = document.createElement("div");
    const btn10 = document.createElement("button");
    const btn20 = document.createElement("button");
    const btn30 = document.createElement("button");
    const btn40 = document.createElement("button");

    btn10.textContent = "10 X 10";
    btn20.textContent = "20 X 20";
    btn30.textContent = "30 X 30";
    btn40.textContent = "40 X 40";

    btnContainer.className ="gridSizes"

    title.parentNode.insertBefore(btnContainer, title.nextSibling)
    btnContainer.appendChild(btn10);
    btnContainer.appendChild(btn20);
    btnContainer.appendChild(btn30);
    btnContainer.appendChild(btn40);

    btn10.addEventListener('click', () => showGrid(10));
    btn20.addEventListener('click', () => showGrid(20));
    btn30.addEventListener('click', () => showGrid(30));
    btn40.addEventListener('click', () => showGrid(40));
}

// Will selected color depending on MODE
function changeColor(e){
   if(e.type ==='mouseover' && !mouseDown) return 
    if(MODE == 'color'){
    e.target.style.backgroundColor = currentColor
    }else if(MODE == 'eraser'){
    e.target.style.backgroundColor = '#fefefe'
    }else if(MODE == 'rainbowMode'){
    e.target.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
    }
}

function setCurrentColor(newColor){
    currentColor = newColor;
}

function setMode(newMode){
    MODE = newMode;
}

function clearGrid(){
    for(const gridSquare of gridSquares){ gridSquare.style.backgroundColor = '#fefefe';}
}

function showElements(){
    page.removeChild(startBtn);
    container.style.display = 'inline-grid';
    modeSelect.style.display = 'flex';
}