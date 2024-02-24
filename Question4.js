// Branch Name: B2_W4_D5

/* Question 4: Write a for loop to find and log the smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

function smallArray(arr) {
    let smallvalue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallvalue) {
            smallvalue = arr[i];
        }

    }
    return smallvalue;
}

console.log(smallArray(numArr));