// Branch Name: B2_W4_D5

/* Question 25: Write a for loop to find the intersection of two arrays.
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];


function arreyy(ab1, ab2) {
    let arr3 = [];
    for (let i = 0; i < ab1.length; i++) {
        if (ab1.includes(ab2[i])) {
            arr3.push(ab2[i]);
        }
    }

    return arr3;
}

console.log(arreyy(arr1, arr2));

//Result [ 3, 4, 5 ] 
