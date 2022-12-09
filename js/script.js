numberRowCol = 16;

createGrid(numberRowCol);

// functions


function createGrid(numberRowCol) {

    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: repeat(${numberRowCol}, 1fr); grid-template-rows: repeat(${numberRowCol}, 1fr);`);

    let boxArray = [];

    for (let i = 1; i <= numberRowCol**2; i++) {
        boxArray[i] = document.createElement('div');
        boxArray[i].classList.add('box');
        boxArray[i].innerHTML = i;
        container.appendChild(boxArray[i])
    }

    // for (let i = 1; i < numberRowCol**2; i++) {
    //     const box = document.createElement
    // }
        
    // const box = document.createElement('div');
    // box.setAttribute('style', )
    

}


