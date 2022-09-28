let container = document.querySelector(".container");
container.style.display = 'none';
const page = document.querySelector(".page");

let gridSquares = document.getElementsByClassName("squares");
let MODE = 'color';
let title = document.querySelector(".title");
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
function blackTakeOver(){
    for(const gridSquare of gridSquares){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        gridSquare.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`; 
    }  
}

colorInput.oninput = (e) => setCurrentColor(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let startBtn = document.createElement('button');
startBtn.id = "start";
startBtn.textContent = "Get Started";
title.appendChild(startBtn);

let gridSelector = document.createElement('div');
function showOptions(){
    let btnContainer = document.createElement("div");
    let btn10 = document.createElement("button");
    let btn16 = document.createElement("button");
    let btn20 = document.createElement("button");
    let btn30 = document.createElement("button");

    btn10.textContent = "10 X 10";
    btn16.textContent = "16 X 16";
    btn20.textContent = "20 X 20";
    btn30.textContent = "30 X 30";

    btnContainer.className ="gridSizes"
    
    title.appendChild(btnContainer)
    btnContainer.appendChild(btn10);
    btnContainer.appendChild(btn16);
    btnContainer.appendChild(btn20);
    btnContainer.appendChild(btn30);
    
    btn10.addEventListener('click', () => showGrid(10));
    btn16.addEventListener('click', () => showGrid(16));
    btn20.addEventListener('click', () => showGrid(20));
    btn30.addEventListener('click', () => showGrid(30));
}

startBtn.addEventListener('click', (e) => { showOptions();title.removeChild(startBtn);})
eraserBtn.addEventListener('click', () => setMode('eraser'))
colorBtn.addEventListener('click', () => setMode('color'))
clearBtn.addEventListener('click', () => clearGrid())
blackBtn.addEventListener('click', () => {blackTakeOver(); setMode('blackMode')})

function showGrid(gridSize){    
    container.style.display = 'inline-grid';
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
function changeColor(e){
   if(e.type ==='mouseover' && !mouseDown) return 
    if(MODE == 'color'){
    e.target.style.backgroundColor = currentColor
    }else if(MODE == 'eraser'){
    e.target.style.backgroundColor = '#fefefe'
    }else if(MODE == 'blackMode'){
    e.target.style.backgroundColor = 'black'
    }
}
