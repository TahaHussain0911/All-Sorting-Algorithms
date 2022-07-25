let arr = [2, 4, 36, 17, 167, 215, 12, 34, 1]
function bubblesort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { //arr.length-1-i because the greatest number in the array would be placed at the end after the end of loop
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                // console.log(arr)
            }
        }
    }
    return arr;
}
console.log(bubblesort(arr))
