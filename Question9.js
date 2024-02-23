// Branch Name: B2_W4_D3

//  Question 9: Write a for-loop, and log the current and its immediate previous element.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function abc(arr) {
    const a = [];
    for (let i = 0; i <= arr.length - 1; i = i + 1) {
        if (i === 0) {
            a.push([arr[i]])
        } else {
            a.push([arr[i], arr[i - 1]]);
        }

    }

    return a;
}

console.log(abc(numArr));


// [
//     [ 1 ],    [ 2, 1 ],
//     [ 3, 2 ], [ 4, 3 ],
//     [ 5, 4 ], [ 6, 5 ],
//     [ 7, 6 ], [ 8, 7 ],
//     [ 9, 8 ], [ 10, 9 ]
//   ]

