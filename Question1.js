// Problem Statement

// Given an input array of integers nums, find an integer array, let’s call it differenceArray, of the same length as an input integer array.
// Each element of differenceArray, i.e., differenceArray[i], should be calculated as follows: take the sum of all elements to the left of index i in array nums (denoted as leftSum[i]), and subtract it from the sum of all elements to the right of index i in array nums (denoted as rightSum[i]), taking the absolute value of the result. Formally:
// differenceArray[i] = | leftSum[i] - rightSum[i] |
// If there are no elements to the left/right of i, the corresponding sum should be taken as 0


let num = [2, 5, 1, 6];

function Arrayy(nums) {
    let leftsum=[];
    let rightsum=[];
    for (let i = 0; i < nums.length; i++) {
        leftsum.push(nums[i]);
        
    }

    return leftsum
}
console.log(Arrayy(num));



