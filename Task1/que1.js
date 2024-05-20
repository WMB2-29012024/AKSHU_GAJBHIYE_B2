// - Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]



const nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;


function Arrayyy(nums, val) {
    let numlength = nums.length;
    let i = 0;
    while (i < numlength) {
        if (nums[i] === val) {
            nums[i] = nums[numlength - 1];
            nums[numlength - 1] = "_"
            numlength--;
        } else {
            i++;
        }
    }
    return (numlength, nums);
}

console.log(Arrayyy(nums, val))