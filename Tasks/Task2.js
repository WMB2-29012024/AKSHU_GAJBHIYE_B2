// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

let nums = [1, 2, 3, 1, 2, 3], k = 2;

function Arrayyy(num, tar) {
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] == tar) {
            count++;
        }
    }
    return count % 2 == 0 ? true : false;
}

console.log(Arrayyy(nums, k));

