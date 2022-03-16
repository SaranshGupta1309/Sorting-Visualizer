
async function lomuto(randomArray, low, high) {
    let i = low - 1;
    let pivot = randomArray[high];
    allbars[high].classList.add("bars-selected");
    await visual(time);
    for (let j = low; j <= high; j++) {
        allbars[j].classList.add("bars-sorted");
        await visual(time);
        if (randomArray[j] < pivot) {
            i++;
            allbars[i].classList.add("bars-compared");
            await visual(time);
            var temp = randomArray[i];
            randomArray[i] = randomArray[j];
            randomArray[j] = temp;
            var temp = allbars[i].style.height;
            allbars[i].style.height = allbars[j].style.height;
            allbars[j].style.height = temp;
            allbars[i].classList.remove("bars-compared");

        }
        allbars[j].classList.remove("bars-sorted");
    }
    var temp = randomArray[i + 1]
    randomArray[i + 1] = randomArray[high];
    randomArray[high] = temp;
    var temp = allbars[i + 1].style.height;
    allbars[i + 1].style.height = allbars[high].style.height;
    allbars[high].style.height = temp;
    allbars[high].classList.remove("bars-selected");
    return i + 1;
}

async function quickSortUtil(randomArray, low, high) {
    if (low >= high)
        return;
    let partition = await lomuto(randomArray, low, high);
    await quickSortUtil(randomArray, low, partition - 1);
    await quickSortUtil(randomArray, partition + 1, high);
}

async function quickSorting() {
    disable_buttons();
    await quickSortUtil(randomArray, 0, arr_size - 1);
    console.log(randomArray);
    enable_buttons();
}