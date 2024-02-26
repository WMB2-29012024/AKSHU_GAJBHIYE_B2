// Branch Name: B2_W4_D5

/* Question 23: Write a for loop to find the median of elements in an array.
*/

const arr = [2, 4, 8, 6, 9];

function arrreyy(abc) {
    let a = arr[0]
    abc.sort();
    for (let i = 0; i < abc.length / 2; i++) {
        a = arr[i]
    }
    return a;
}
 
console.log(arrreyy(arr));

//Result middle number is 6;