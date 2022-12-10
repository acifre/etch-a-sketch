
boxArray = [];

pickGridSize();
createGrid(numberRowCol);

// functions

function pickGridSize() {

    numberRowCol = parseInt(window.prompt('Grid size?'));

    while ((numberRowCol%1) != 0) 
    {
        alert("Must input numbers");
        numberRowCol = parseInt(window.prompt('Grid size?'));
    }
}


function createGrid(numberRowCol) {

    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: repeat(${numberRowCol}, 1fr); grid-template-rows: repeat(${numberRowCol}, 1fr);`);

    for (let i = 1; i <= numberRowCol**2; i++) {
        boxArray[i] = document.createElement('div');
        boxArray[i].classList.add('box');
        container.appendChild(boxArray[i])
    }
    
    const boxes = document.querySelectorAll('.box');

for (let box of boxes) {

        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: black; color: black;')
            // box.classList.add("color");

        })

}

}



// Grid size button

const gridBtn = document.querySelector('.grid-size');
gridBtn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    
    while (container.firstChild) {
          container.removeChild(container.lastChild);
        }

    boxArray = [];
    pickGridSize();
    createGrid(numberRowCol);
});




// Clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    
    while (container.firstChild) {
          container.removeChild(container.lastChild);
        }

    boxArray = [];
    createGrid(numberRowCol);
});



