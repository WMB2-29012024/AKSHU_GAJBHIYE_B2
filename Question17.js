// Branch Name: B2_W4_D5
      
/* Question 17: Write a for loop to check if all elements in the array are positive numbers.
*/

const arr = [10, 20, -5, 30, 40];

function arrreyy(arr) {
    let abc=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            abc.push(arr[i])
        }
    }
    return abc;
}

console.log(arrreyy(arr));

//Result [ 10, 20, 30, 40 ]
