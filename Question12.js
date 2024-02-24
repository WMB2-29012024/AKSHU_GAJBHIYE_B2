// Branch Name: B2_W4_D5

/* Question 12: Write a for loop to log elements not equal to "apple"
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function eqalarr(arr) {
    let a = strArr[1];
    let abc = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== a) {
            abc.push(arr[i]);
        }
    }
    return abc;
}
console.log(eqalarr(strArr));

//Result [ 'banana', 'orange', 'grape', 'kiwi' ]