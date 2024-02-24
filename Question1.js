// Branch Name: B2_W4_D5
      
/* Question 1: Write a for loop to log each element multiplied by 2.
*/

const numArr = [1, 2, 3, 4, 5];

function multiplayArray(arr) {
    let duplicate=[];
    for (let i = 0; i < arr.length; i++) {
        duplicate.push(arr[i]*2);
    }
    return duplicate;
}
console.log(multiplayArray(numArr));


//Result [ 2, 4, 6, 8, 10 ]

