// Branch Name: B2_W4_D5

/* Question 18: Write a for loop to find the factorial of a given number.
*/

const num = 5;

function fartorial(n) {
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact *= i;
    }
    return fact
}

console.log(fartorial(num));


//Result 120
