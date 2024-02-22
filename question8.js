const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function abc(arr) {
    const a = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i !== arr.length - 1) {
            a.push([arr[i], arr[i + 1]]);
        } else {
            a.push([arr[i]]);
        }
    }
    return a;
}

console.log(abc(numArr));
// [ 1, 2 ],  [ 2, 3 ],
//[3, 4], [4, 5],
//   [5, 6], [6, 7],
// [7, 8], [8, 9],
//[9, 10], [10]