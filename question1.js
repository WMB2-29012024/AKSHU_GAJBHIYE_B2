// Given a binary matrix that has dimensions m * n, consisting of ones and zeros, determine the row that contains the highest number of ones and return two values: the zero-based index of this row and the actual count of ones it possesses.

// If there is a tie, i.e., multiple rows contain the same maximum number of ones, we must select the row with the lowest index.

// Expected Time Complexity: O(n * m),
// Expected Space Complexity: O(1)

// Examples

// Example 1:
// Input: [[1, 0], [1, 1], [0, 1]]
// Expected Output: [1, 2]

let nums = [[1, 0], [1, 1], [0, 1]];


function Arrayyy(num) {
    let sum = 0;
    let sumIndex = -1;
    for (let i = 0; i < num.length; i++) {
        let count = 0
        for (let j = 0; j < num[i].length; j++) {
            if (num[i][j] == 1) {
                count++;
            }
        }
        if (count > sum) {
            sum = count;
            sumIndex = i;
        }
    }
    return [sumIndex, sum];
}


console.log(Arrayyy(nums));

