// Branch Name: B2_W4_D5

/* Question 21: Write a for loop to find the sum of all odd numbers between 1 and a given number.
*/

const num = 10;

function Arreyyy(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return sum;
}

console.log(Arreyyy(num));

//1,3,5,7,9
