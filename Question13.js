// Branch Name: B2_W4_D3

//  Question 13: Write a for-loop:
// - Start from 0th index, log every element,
// - then go to next index, log all next elements,
// - continue till last element

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arreyy(arr) {

    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(arr[j]);
        }
    }
}

arreyy(numArr);



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [1, 2, 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4]
// [1, 2, 3]
// [1, 2]
// [1]



