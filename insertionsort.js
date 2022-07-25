function insertionsort(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i]);
        for (let j = newarr.length - 1; j > 0; j--) {
            if (newarr[j - 1] > newarr[j]) {
                [newarr[j - 1], newarr[j]] = [newarr[j], newarr[j - 1]]
            }
        }
    }
    return newarr;
}
console.log(insertionsort([2, 4, 36, 17, 167, 215, 12, 34, 1]));
