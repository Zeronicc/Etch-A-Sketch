const GRID_SIZE = 256;
const container = document.querySelector(".container");
const page = document.querySelector(".page")
let addContainer = document.createDocumentFragment();

let startBtn = document.createElement('button');
startBtn.id = "start";
startBtn.textContent = "Start Sketching";
page.insertBefore(startBtn, page.firstChild);
startBtn.addEventListener('click', (e) => {showGrid(); page.removeChild(startBtn)})

function showGrid(){    
for(let i = 0; i < GRID_SIZE; i++){
        let div = document.createElement('div');
        div.className = "squares";
        addContainer.appendChild(div);
        div.addEventListener('mouseenter', (e) => div.style.backgroundColor = "blue")
    }
container.appendChild(addContainer)
}
