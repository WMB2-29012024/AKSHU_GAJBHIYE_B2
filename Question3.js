// Branch Name: B2_W6_D3

/* Question 3: You're given a sorted array of integers. Write a function to replace all even numbers from the array with their squared values, using splice method. And then return all the numbers from the array which are greater than 6, in a new array using findIndex and slice method.
*/


// Input:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Arrrayyyy(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            number.splice(i, 1, Math.pow(number[i], 2));
        }
    }
    let index = number.findIndex((num) => num > 6);
    return index !== 0 ? number.slice(index) : [];
}

console.log(Arrrayyyy(numbers));

// Output:
// [16, 36, 64, 100]

