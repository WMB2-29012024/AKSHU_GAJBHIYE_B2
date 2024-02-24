// Branch Name: B2_W4_D5
      
/* Question 16: Write a for loop to find the index of a specific element in the array.
*/

const arr = ["apple", "banana", "orange", "grape"];
const target = "orange";

function arreyyy(arr,tar) {
    let ill=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===tar) {
            ill=i;
        }
        
    }
    return ill;
}
console.log(arreyyy(arr,target));

