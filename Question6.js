// Branch Name: B2_W4_D5

/* Question 6: Write a for loop to find and log the index of smallest element in the array.
*/

const numArr = [10, 2, 30, 1, 4, 50];

function smallArray(arr) {
    let elem = arr[0];
    let ill = 0;
    for (let i = 0; i < arr.length; i++) {
        if (elem > arr[i]) {
            ill = i;
            elem = arr[i];
        }
    }
    return ill;
}

console.log(smallArray(numArr));
