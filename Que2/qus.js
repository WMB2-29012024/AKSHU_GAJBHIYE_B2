// Example usage
// console.log(countOccurrences("hello world", "o")); // Output: 2
// console.log(countOccurrences("apple", "p")); // Output: 2
// console.log(countOccurrences("banana", "a")); // Output: 3


let str = 'hello world';
let target = 'z';


function countOccurrences(s, t) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            count++;
        }
    }
    return count === 0 ? -1 : count;
}

console.log(countOccurrences(str, target));


