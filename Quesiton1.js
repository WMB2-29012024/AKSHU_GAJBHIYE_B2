// Problem Statement

// Given a one-dimensional array of integers, create a new array that represents the running sum of the original array.
// The running sum at position i in the new array is calculated as the sum of all the numbers in the original array from the 0th index up to the i-th index (inclusive). Formally, the resulting array should be computed as follows: result[i] = sum(nums[0] + nums[1] + ... + nums[i]) for each i from 0 to the length of the array minus one.


let nums=  [1, 2, 3, 1];
// let nums=  [1, 2, 3, 4];

function PostivieArray(num) {
    let a=false;
    for (let i = 0; i <= num.length; i++) {
        if (num[i]===num[i+1]) {
            a=true
        }else{
            a=false;
        }
    }
    return a;
}
console.log(PostivieArray(nums));