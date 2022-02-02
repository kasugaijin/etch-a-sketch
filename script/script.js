let containerDiv = document.querySelector('.container');
let userValue = document.getElementById('user-number');
let userSubmit = document.getElementById('user-submit');
let promptText = document.getElementById('prompt');
let copyInput = document.getElementById('copy-input');
let clearButton = document.getElementById('clear-button');

userValue.addEventListener('focus', entryHint);
userValue.addEventListener('keyup', duplicateGrid);
userSubmit.addEventListener('click', makeGrid);
clearButton.addEventListener('click', clearGrid);

//Run makeGrid and draw functions on page load to make default 10x10 grid that is drawable
makeGrid();
draw();

//Indicates to user it's a square grid Y x Y
function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
}

//Save space and clutter on page with appear/disappearing user instructions for grid size
function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99."; 
}

//Makes nested divs that are organized into a grid using CSS flexbox. 
//Invalid entries get warning, default grid is 10x10, else it is user a defined resolution.
function makeGrid() {
    let number = userValue.value;
    if(number < 0 || number > 99 || isNaN(number)) {
        promptText.textContent = "Make sure it's a number from 2 to 99!";
    } else {
    promptText.textContent = "";
    copyInput.textContent = "";
    userValue.value = "";
    containerDiv.innerHTML = "";
    if (number == 0 || number > 99 || number == "") {
        for(let i = 0; i < 10; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);
            for(let k = 0; k < 10; k++) {
                let column = document.createElement('div');
                column.classList.add('column')
                row.appendChild(column);
            }
            } 
        }   else {
        for(let i = 0; i < number; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            containerDiv.appendChild(row);
            for(let k = 0; k < number; k++) {
                let column = document.createElement('div');
                column.classList.add('column')
                row.appendChild(column);
        }
    }
}
}
//call draw function here to allow drawing after new grid is made
draw();
}

//adds event listener to all divs with class "column"
//added in global scope to allow drawing on page load
//this refers to the element triggering the mouseover event listener
function draw() {
let columns = document.getElementsByClassName("column");
for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", changeColor);
    }
function changeColor() {
    let blackRadio = document.getElementById('black-pen');
    let redRadio = document.getElementById('red-pen');
    let blueRadio = document.getElementById('blue-pen');
    let eraserRadio = document.getElementById('eraser'); 
    
    if (blackRadio.checked) {
        this.className = "column-black"
    } else if (redRadio.checked) {
        this.className = "column-red"
    } else if (blueRadio.checked) {
        this.className = "column-blue"
    } else if (eraserRadio.checked) {
        this.className = "column"
    }
}
}

//eraser function finds all divs with altered classes and resets them to default
function clearGrid() {
    let blackColumns = document.getElementsByClassName("column-black");
    for (let i = 0; i < blackColumns.length; i++) {
        blackColumns[i].className = "column";
        }
    let redColumns = document.getElementsByClassName("column-red");
    for (let i = 0; i < redColumns.length; i++) {
        redColumns[i].className = "column";
        }
    let blueColumns = document.getElementsByClassName("column-blue");
    for (let i = 0; i < blueColumns.length; i++) {
        blueColumns[i].className = "column";
        }
    }





//function makeGrid(number) {
    //if (number == 0) {
        //nested if for a 
  //  }
//}

//let eraser = document.getElementById('xxx');
//let clearAll = document.getElementById('xxx');

//nested for loop i = user input, 
//for loop to create row div, add class row, append to container
//nested for loop to create column div, add class column, append to row div.
//if user input = "" then default grid of 10 x 10, else user input grid size
//eraser - hover over clear colour
//clear button, clear all divs of all colour
//colour select
//shading
//have red text appear under value field to prompt "1-99"
//on click submit, set user prompt to "" and clear form and make prompt if they enter "" and hit submit