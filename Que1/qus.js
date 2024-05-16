const arr = [10, 5, 20, -8, 15];

function findLargestNumber(ar) {

    let max = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    return max;
}

console.log(findLargestNumber(arr));
