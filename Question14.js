// Branch Name: B2_W4_D5

/* Question 14: Write a for loop to log elements that start with the letter "a".
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function arreeyy(arr) {
    let abc = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0).toLowerCase() == 'a') {
            abc.push(arr[i]);
        }
    }
    return abc;
}

console.log(arreeyy(strArr));

//Result [ 'apple' ]