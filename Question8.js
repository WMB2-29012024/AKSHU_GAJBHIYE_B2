// Branch Name: B2_W4_D5
      
/* Question 8: Write a for loop to log only odd numbers in the array.
*/

const numArr = [10,1,3,5, 2, 9, 8, 6, 12, 20, 30, 4, 50];

function eveArray(arr) {
    let evenarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            evenarr.push(arr[i]);
        }
    }
    return evenarr;
}

console.log(eveArray(numArr));
