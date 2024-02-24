// Branch Name: B2_W4_D5
      
/* Question 3: Write a for loop to find and log the largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

function largestNum(arr) {
    let largeNumber=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>largeNumber) {
            largeNumber=arr[i];
        }
    }
    return largeNumber;
}

console.log(largestNum(numArr));

