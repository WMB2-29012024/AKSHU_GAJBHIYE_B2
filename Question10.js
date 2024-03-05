// Branch Name: B2_W6_D1

/* Question 10: Check and log, if the value 9007199254740991 is a safe integer in JavaScript using Number.isSafeInteger().
*/

let value = 9007199254740991;

if (Number.isSafeInteger(value)) console.log('safe');
else console.log('not safe');
