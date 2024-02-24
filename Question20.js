// Branch Name: B2_W4_D5

/* Question 20: Write a for loop to find the sum of all even numbers between 1 and a given number.
*/

const num = 10;

function Arreyyy(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(Arreyyy(num));

// Result 2,4,6,8,10