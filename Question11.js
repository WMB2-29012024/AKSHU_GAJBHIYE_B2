// Branch Name: B2_W4_D5

/* Question 11: Write a for loop to log elements between 2 and 7.
*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function betArray(arr) {
    let abc = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2 && arr[i] <= 7) {
            abc.push(arr[i]);
        }
    }
    return abc;
}

console.log(betArray(numArr));

//Resutl [ 2, 3, 4, 5, 6, 7 ]