//Function to do insertion Sort
async function insertionSorting() {
    //Disabling Buttons
    disable_buttons();
    let allbars = document.querySelectorAll(".bars");
    //First bar is sorted in insertion sort
    allbars[0].classList.add("bars-sorted");
    for (let i = 1; i < arr_size; i++) {
        let num = randomArray[i];
        allbars[i].classList.add("bars-selected");
        await visual(time);
        let temp = allbars[i].style.height;
        let index = i - 1;
        while (index >= 0 && randomArray[index] > num) {
            allbars[index].classList.add("bars-compared");
            allbars[index + 1].classList.add("bars-compared");
            await visual(time);
            allbars[index + 1].style.height = allbars[index].style.height;
            allbars[index].style.height = temp;
            randomArray[index + 1] = randomArray[index];
            allbars[index].classList.remove("bars-compared");
            allbars[index + 1].classList.remove("bars-compared");
            index--;
        }
        randomArray[index + 1] = num;
        allbars[index + 1].style.height = temp;
        allbars[i].classList.remove("bars-selected");
        allbars[i].classList.add("bars-sorted");
    }
    console.log(randomArray);
    for (let i = arr_size - 1; i >= 0; i--) {
        allbars[i].classList.remove("bars-sorted");
        await visual(time);
    }
    enable_buttons();
}