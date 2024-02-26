// Branch Name: B2_W4_D5
      
/* Question 26: Write a for loop to find the union of two arrays.
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let union = [];

// Add elements from arr1 to union
for (let i = 0; i < arr1.length; i++) {
  if (!union.includes(arr1[i])) {
    union.push(arr1[i]);
  }
}

// Add elements from arr2 to union
for (let i = 0; i < arr2.length; i++) {
  if (!union.includes(arr2[i])) {
    union.push(arr2[i]);
  }
}

console.log("Union of arrays:", union);




