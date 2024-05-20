// Input: s = "anagram", t = "nagaram"
// Output: true

const s = "anagram", t = "nagaram";

// let a = s.split("");
// console.log(t.includes(a[5]));


function Arrayy(str, tar) {
    let flag = false;
    for (let i = 0; i < tar.length; i++) {
        return str.includes(tar[i]);
    }
    return flag;
}
console.log(Arrayy(s, t));
