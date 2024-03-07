// Given a 2D array accounts of m x n size, accounts[j] represents money in the jth bank account of the ith customer.

// Return the wealth of the richest individual from a set of bank customers.

// Imagine every customer has multiple bank accounts, with each account holding a certain amount of money. The total wealth of a customer is calculated by summing all the money across their multiple accounts.


// let Input: [[5,2,3],[0,6,7]]
// Expected Output: 13

// let input = [[1,2],[3,4],[5,6]]
let input = [[5, 2, 3], [0, 6, 7]]


function Arrrayyy(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let userSum = 0;
        for (let j = 0; j < num[i].length; j++) {
            userSum += num[i][j];
        }
        sum = sum < userSum ? sum = userSum : sum;
    }
    return sum;
}

console.log(Arrrayyy(input));

