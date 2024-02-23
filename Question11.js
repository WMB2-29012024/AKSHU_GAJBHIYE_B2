// Branch Name: B2_W4_D3

//  Question 11: Write a for-loop and count frequency of each element in the array. Store the element and its frequency in an object.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 5, 6, 7];


function frequency(arr) {
    let a = {};

    for (let i = 0; i < arr.length; i++) {
        if (a[arr[i]]) {
            a[arr[i]] = a[arr[i]] + 1
        } else {
            a[arr[i]] = 1
        }
    }
    return a;
}




console.log(frequency(numArr));

//output : {
//   '1': 2,
//   '2': 2,
//   '3': 1,
//   '4': 1,
//   '5': 2,
//   '6': 2,
//   '7': 2,
//   '8': 1,
//   '9': 1,
//   '10': 1
// }



