function selectionsort(arr){
    for (let i = 0; i < arr.length; i++) {
        let switching;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                switching=j;
            }
        }
        [arr[i],arr[switching]]=[arr[switching],arr[i]];
    }
    return arr;
}
console.log(selectionsort([21,5,12,17,389,1,244,33,29,9]))
