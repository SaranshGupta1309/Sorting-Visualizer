async function selectionSorting() {
    disable_buttons();
    let allbars = document.querySelectorAll(".bars");
    for (let i = 0; i < arr_size - 1; i++) {
        allbars[i].classList.add("bars-compared");
        let mini = randomArray[i];
        let index = i;
        allbars[index].classList.add("bars-compared");
        for (let j = i + 1; j < arr_size; j++) {
            allbars[j].classList.add("bars-selected");
            await visual(time);
            if (randomArray[j] < mini) {
                if (i != index)
                    allbars[index].classList.remove("bars-compared");
                mini = randomArray[j];
                index = j;
                allbars[index].classList.add("bars-compared");
            }
            allbars[j].classList.remove("bars-selected");
        }
        let bar1 = allbars[i];
        let bar2 = allbars[index];
        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;
        temp = randomArray[index];
        randomArray[index] = randomArray[i];
        randomArray[i] = temp;
        allbars[i].classList.add("bars-sorted");
        allbars[i].classList.remove("bars-compared");
        allbars[index].classList.remove("bars-compared");
    }
    allbars[arr_size - 1].classList.add("bars-sorted");
    for (let i = arr_size - 1; i >= 0; i--) {
        allbars[i].classList.remove("bars-sorted");
        await visual();
    }
    enable_buttons();
}