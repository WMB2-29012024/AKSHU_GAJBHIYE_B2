// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

const ab = "radar";
function isPalindrome(str) {
    let s = str;
    let a = '';
    for (let i = str.length - 1; i >= 0; i--) {
        a += str[i];
    }
    return a === s ? true : false;
}
console.log(isPalindrome(ab));
