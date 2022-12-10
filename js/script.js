numberRowCol = parseInt(window.prompt('Grid Size?'));
boxArray = [];

createGrid(numberRowCol);

// functions


function createGrid(numberRowCol) {

    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: repeat(${numberRowCol}, 1fr); grid-template-rows: repeat(${numberRowCol}, 1fr);`);

    for (let i = 1; i <= numberRowCol**2; i++) {
        boxArray[i] = document.createElement('div');
        boxArray[i].classList.add('box');
        boxArray[i].innerHTML = i;
        container.appendChild(boxArray[i])
    }
    
    const boxes = document.querySelectorAll('.box');

for (let box of boxes) {

        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color: black;')
            // box.classList.add("color");

        })

}

}





// Clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    const container = document.querySelector('.container');
    
    while (container.firstChild) {
          container.removeChild(container.lastChild);
        }

    boxArray = [];
    numberRowCol = window.prompt("Grid Size?");
    createGrid(numberRowCol);
});



