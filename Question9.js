// Branch Name: B2_W4_D5

/* Question 9: Write a for loop to log elements greater than 3.
*/

const numArr = [1, 2, 9, 5, 4, 4, 5, 6, 7, 8, 9];

function greatArray(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            a.push(arr[i]);
        }
    }
    return a;
}
console.log(greatArray(numArr));

//Result 

// [9, 5, 4, 4, 5,
//     6, 7, 8, 9]