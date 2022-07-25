function selectionsort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        console.log(arr)
    }
    return arr;
}
console.log(selectionsort([21,5,12,17,389,1,244,33,29,9]))
