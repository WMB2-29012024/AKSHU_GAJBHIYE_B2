// Branch Name: B2_W4_D3

//  Question 3: Write a for-loop to reverse a string.

const strArr = "asdasdzxczxc";

function rev(arr) {
    let ab = []
    for (let i = arr.length - 1; i >= 0; i--) {
        ab.push(arr[i]);
    }
    let b=ab.join('')
    return b;
}
console.log(rev(strArr));

