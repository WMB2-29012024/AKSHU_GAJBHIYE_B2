// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

let ransomNote = "a", magazine = "b";

// let a = ransomNote.split('');
// let flag = false;
// for (let i = 0; i < ransomNote.length; i++) {
//     if (a[i] == magazine[i]) {
//         flag = true;
//     }
//     console.log(flag);
// }


function Arrraayyyy(ransom, magazine) {
    let a = ransom.split('');
    let flag = false;
    for (let i = 0; i < ransom.length; i++) {
        if (a[i] == magazine[i]) {
            flag = true;
        }
    }
    return flag
}
console.log(Arrraayyyy(ransomNote, magazine));
