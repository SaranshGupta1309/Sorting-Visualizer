//Function to visualize bubble sorting Algorithm
async function bubbleSorting() {
    //Disabling Buttons
    disable_buttons();
    for (let i = 0; i < arr_size; i++) {
        let j = 0;
        for (; j < arr_size - 1 - i; j++) {
            //If the two compared bars are already in sorted form, then yellow color is shown
            if (randomArray[j] <= randomArray[j + 1]) {
                allbars[j].classList.add("bars-selected");
                allbars[j + 1].classList.add("bars-selected");
                await visual(time);
            }
            //If not, then first they are swapped,and are orange, after swapping changed to yellow color
            else {
                allbars[j].classList.add("bars-compared");
                allbars[j + 1].classList.add("bars-compared");
                await visual(time);
                let temp = allbars[j].style.height;
                allbars[j].style.height = allbars[j + 1].style.height;
                allbars[j + 1].style.height = temp;
                allbars[j].classList.remove("bars-compared");
                allbars[j + 1].classList.remove("bars-compared");
                allbars[j].classList.add("bars-selected");
                allbars[j + 1].classList.add("bars-selected");
                await visual(time);
                temp = randomArray[j + 1];
                randomArray[j + 1] = randomArray[j];
                randomArray[j] = temp;
            }
            allbars[j].classList.remove("bars-selected");
            allbars[j + 1].classList.remove("bars-selected");

        }
        allbars[arr_size - 1 - i].classList.add("bars-sorted");
    }
    //Bars are changed to white again
    for (var i = arr_size - 1; i >= 0; i--) {
        allbars[i].classList.remove("bars-sorted");
        await visual();
    }
    enable_buttons();
}