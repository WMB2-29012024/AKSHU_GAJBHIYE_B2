// Branch Name: B2_W4_D5

/* Question 15: Write a for loop to log elements that end with the letter "e"
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function arreeyy(arr) {
    let abc = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(arr[i].length - 1).toLowerCase() == "e") {
            abc.push(arr[i]);
        }
    }
    return abc;
}

console.log(arreeyy(strArr));

//Result [ 'apple', 'orange', 'grape' ]
