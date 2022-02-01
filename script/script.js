let containerDiv = document.querySelector('.container');
let userValue = document.getElementById('user-number');
let userSubmit = document.getElementById('user-submit');
let promptText = document.getElementById('prompt');
let copyInput = document.getElementById('copy-input');
let rows = document.querySelectorAll('.row');
let columns = document.querySelectorAll('.column');

userValue.addEventListener('focus', entryHint)
userValue.addEventListener('keyup', duplicateGrid)
userSubmit.addEventListener('click', makeGrid);
rows.addEventListener('mouseover', draw);
columns.addEventListener('mouseover', draw);

function draw() {
  rows.style.color = "orange";
  columns.syle.color = "orange";
}

function duplicateGrid() {
    let userGrid = userValue.value;
    copyInput.textContent = "x " + userGrid;
}

function entryHint() {
    promptText.textContent = "Enter a number between 2 and 99." 
}

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
}

makeGrid();




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