let main = document.querySelector('.main');
let resetBtn = document.querySelector('.reset')


function creatGrid(gridSize=8) {
    for (i=1; i<=gridSize*gridSize; i++){
     let pixel = document.createElement('div')
      main.appendChild(pixel);
      pixel.classList.add('pixel');
      pixel.style.border='1px solid black'
}     main.style.gridTemplateColumns = `repeat(${gridSize} , auto)`
} creatGrid()


function addColor(){
    let pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => 
        pixel.addEventListener('mouseover',() =>{
        pixel.style.backgroundColor = 'red'
        }
        ))
} addColor()

function clear(){
    main.innerHTML='';
}

resetBtn.addEventListener('click',() => {
    gridSize=prompt('Enter the size of the grid',8)
    if (gridSize<=50){
        clear()
        creatGrid(gridSize)
        addColor()
    }
    else {
    alert ('50 is the biggest')
    clear()
    creatGrid()
    addColor();
    }
}
)