function mergesort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    const midpoint = Math.floor(arr.length / 2);
    const LeftArr = arr.slice(0, midpoint);
    const RightArr = arr.slice(midpoint, arr.length + 1);
    return merge(mergesort(LeftArr), mergesort(RightArr)); //till there is only one elem left in each array
}
function merge(LeftArr, RightArr) {
    const sortedarr = [];
    // console.log(LeftArr,RightArr)
    while (LeftArr.length && RightArr.length) {
        if (LeftArr[0] <= RightArr[0]) {
            sortedarr.push(LeftArr.shift());
        } else {
            sortedarr.push(RightArr.shift());
        }
    }
    return [...sortedarr, ...LeftArr, ...RightArr]; //if any remaining eleements left in either of the array it will combine in the sorted
}
console.log(mergesort(arr));
