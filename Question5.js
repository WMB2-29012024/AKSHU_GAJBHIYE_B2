// Branch Name: B2_W4_D5

/* Question 5: Write a for loop to find and log the index of largest element in the array.
*/

const numArr = [10, 2, 200, 30, 81, 100, 500, 4, 50, 80];

function largeElement(arr) {
    let elem = arr[0];
    let ill = 0;
    for (let i = 0; i < arr.length; i++) {
        if (elem < arr[i]) {
            ill = i;
            elem = arr[i];
        }
    }
    return ill
}

console.log(largeElement(numArr));