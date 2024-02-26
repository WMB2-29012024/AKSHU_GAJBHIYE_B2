// Branch Name: B2_W4_D5

/* Question 24: Write a for loop to remove duplicate elements from an array.
*/

const arr = [1, 2, 3, 3, 4, 4, 5, 6, 6, 7];

function arrreyy(numArr) {
    let arr = [];
    for (let i = 0; i < numArr.length; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            if (j !== i) {
                arr.push(numArr[i]);
            }
        }
    }
    return arr;
}

console.log(arrreyy(arr));


