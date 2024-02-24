// Branch Name: B2_W4_D5
      
/* Question 13: Write a for loop to concatenate all elements into a single string.
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

function singleArray(arr) {
    let str="";
    for (let i = 0; i < arr.length; i++) {
        str+=arr[i];
        
    }
    return str;
}
console.log(singleArray(strArr));

// Result bananaappleorangegrapekiwi

