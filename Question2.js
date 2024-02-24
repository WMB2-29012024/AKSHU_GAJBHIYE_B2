// Branch Name: B2_W4_D5
      
/* Question 2:  Write a for loop to log the sum of all elements.
*/

const numArr = [1, 2, 3, 4, 5];

function arreySum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}

console.log(arreySum(numArr));


//Result 15