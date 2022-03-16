let box = document.getElementById('bar-container');
let whichSort = document.getElementById("dropdown-text");
let dropdown_box = document.getElementsByClassName("dropdown-content")[0];
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let speedSlider = document.getElementById("speed-slider");
let sizeSlider = document.getElementById("size-slider");
let arraygen = document.getElementById("array-generator");
let randomArray = [];
let time = 200;

// Running these functions, everytime, when the website is loaded
enable_buttons();
newArray();

// Event Listener on start Button
startButton.addEventListener("click", function() {
    sorting(whichSort.innerText);
});

// Function with the help of which the website will realise which sorting algorithm to visualize
function sorting(sortingAlgo){
    console.log("starting");
    if(sortingAlgo == "Bubble Sort")
        bubbleSorting();
    else if(sortingAlgo == "Selection Sort")
        selectionSorting();
    else if(sortingAlgo == "Insertion Sort")
        insertionSorting();
    else if(sortingAlgo == "Merge Sort")
        mergeSorting();
    else if(sortingAlgo == "Quick Sort")
        quickSorting();
    else
        window.alert("Please Choose Sorting Algorithm!");
}

//Event Listener on the stop Button
stopButton.addEventListener("click", stopSorting);

//Reloading Website when stop button is clicked
function stopSorting(){
    window.location.reload();
}

//Event Listener on Randomize button
arraygen.addEventListener("click", newArray);
//Function to generate New Array
function newArray() {
    box.innerHTML = '';
    randomArray.length = 0;
    arr_size = document.getElementById("size-slider").value;
    for (let i = 0; i < arr_size; i++) {
        const bar = document.createElement('div');
        let value = Math.floor(Math.random() * (680 - 5 + 1) + 5);
        bar.classList.add("bars");
        bar.style.height = value/8 + "vh";
        bar.style.width = 70 / arr_size + "vw";
        box.append(bar);
        randomArray.push(value);
    }
}
//Class to add, when dropdown bar is selected
function dropdown_bar() {
    //While Sorting, Disabled the dropdrown box
    if(document.getElementsByClassName("dropdown")[0].disabled == false)
        dropdown_box.classList.add("show");
}
//Function with the help of which we can change sorting Algorithmm
function sortSelection(name) {
    //While Sorting, Disabled the dropdrown box
    if(document.getElementsByClassName("dropdown")[0].disabled == false){
        whichSort.innerText = name;
        dropdown_box.classList.remove("show");
    }
}

//Buttons that are enabled and disabled before or after the visualisation
function enable_buttons() {

    speedSlider.disabled = true;
    speedSlider.classList.add("disabled");
    sizeSlider.classList.remove("disabled");
    sizeSlider.disabled = false;
    stopButton.classList.add("disabled");
    stopButton.disabled = true;
    startButton.disabled = false;
    startButton.classList.remove("disabled");
    arraygen.disabled = false;
    arraygen.classList.remove("disabled");
    document.getElementsByClassName("dropdown")[0].disabled = false;
}

//BUttons that are enabled and disablledd during the visualisation
function disable_buttons() {
    speedSlider.disabled = false;
    stopButton.disabled = false;
    sizeSlider.classList.add("disabled");
    sizeSlider.disabled = true;
    speedSlider.classList.remove("disabled");
    stopButton.classList.remove("disabled");
    startButton.classList.add("disabled");
    startButton.disabled = true;
    arraygen.disabled = true;
    arraygen.classList.add("disabled");
    document.getElementsByClassName("dropdown")[0].disabled = true;
}

// Function which changes the value of visualisation speed
function speed() {
    time = 350 - speedSlider.value;
}

//Await function, taking time parameter
function visual(time) {
    return new Promise(function (resolve) {
        setTimeout(function () { resolve('') }, time);
    })
}