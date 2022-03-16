let allbars = document.getElementsByClassName("bars");
async function merge(randomArray, low, mid, high) {
  var n1 = mid - low + 1;
  var n2 = high - mid;

  var L = new Array(n1);
  var M = new Array(n2);

  for (let i = low; i <= high; i++) {
    allbars[i].classList.add("bars-compared");
    await visual(time);
  }

  for (let i = 0; i < n1; i++)
    L[i] = randomArray[low + i];
  for (let j = 0; j < n2; j++)
    M[j] = randomArray[mid + 1 + j];

  var i, j, k;
  i = 0;
  j = 0;
  k = low;


  while (i < n1 && j < n2) {
    if (L[i] <= M[j]) {
      randomArray[k] = L[i];
      allbars[k].style.height = L[i] / 8 + "vh";

      k++;
      i++;
    }
    else {
      randomArray[k] = M[j];
      allbars[k].style.height = M[j] / 8 + "vh";
      k++;
      j++;
    }
    allbars[k - 1].classList.remove("bars-compared");
    allbars[k - 1].classList.add("bars-sorted");
    await visual(time);
  }

  while (i < n1) {
    randomArray[k] = L[i];
    allbars[k].style.height = L[i] / 8 + "vh";
    k++;
    i++;
    allbars[k - 1].classList.remove("bars-compared");
    allbars[k - 1].classList.add("bars-sorted");
    await visual(time);
  }

  while (j < n2) {
    randomArray[k] = M[j];
    allbars[k].style.height = M[j] / 8 + "vh";
    k++;
    j++;
    allbars[k - 1].classList.remove("bars-compared");
    allbars[k - 1].classList.add("bars-sorted");
    await visual(time);
  }

}

async function mergeSortUtil(randomArray, low, high) {
  if (low >= high)
    return;
  const mid = Math.floor((high + low) / 2);
  await mergeSortUtil(randomArray, low, mid);
  await mergeSortUtil(randomArray, mid + 1, high);
  await merge(randomArray, low, mid, high);
}

async function mergeSorting() {
  disable_buttons();
  await mergeSortUtil(randomArray, 0, randomArray.length - 1);
  console.log(randomArray);
  for (let i = arr_size - 1; i >= 0; i--) {
    allbars[i].classList.remove("bars-sorted");
    await visual(time);
  }
  enable_buttons();
}