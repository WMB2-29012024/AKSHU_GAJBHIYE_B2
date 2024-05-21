// Given an array nums of size n, return the majority element.The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

let nums = [2,2,1,1,1,2,2];

function Arrayyy(num) {
    let count = 0;

    for (let i = 0; i < num.length; i++) {
        let n = num[i];
        if (n == num[i]) {
            count=num[i];
        }
    }
    return count
}
console.log(Arrayyy(nums));

