let main = document.querySelector('.main');
let resetBtn = document.querySelector('.reset')

main.addEventListener("mouseover", hoverOver);

function creatGrid(gridSize=8) {
    for (i=1; i<=gridSize*gridSize; i++){
     let pixel = document.createElement('div')
      main.appendChild(pixel);
      pixel.classList.add('pixel');
      pixel.style.border='1px solid black'
}     main.style.gridTemplateColumns = `repeat(${gridSize} , auto)`
} creatGrid()


function hoverOver(event) {
    if (event.target !== '.main') {
        event.target.style.backgroundColor = `rgba(60, 12, 50, ${addColor(event.target)}`;
    }
}

function addColor(element) {
    // regex targeted at numbers with digits taken from this StackOverflow comment
    // https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color#comment79938383_3752026
    let alphaTag = Number(window.getComputedStyle(element).backgroundColor.match(/[.?\d]+/g)[3]);

    if (alphaTag <= 1) {
        return alphaTag += 0.1;
    }

    return alphaTag;
}

function clear(){
    main.innerHTML='';
}

resetBtn.addEventListener('click',() => {
    gridSize=prompt('Enter the size of the grid',8)
    if (gridSize<=50){
        clear()
        creatGrid(gridSize)
        gaddColor()
    }
    else {
    alert ('50 is the biggest')
    clear()
    creatGrid()
    addColor();
    }
}
)