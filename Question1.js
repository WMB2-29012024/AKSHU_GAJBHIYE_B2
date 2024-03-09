// Branch Name: B2_W6_D3

/* Question 1: Given an array of objects representing students, each with name and age properties, write a function to filter out students who are teenagers (age between 13 and 19) and whose names contain the letter 'a', but only if their names are not more than 6 characters long. Implement the solution using the filter method of arrays.
*/


// Input:
const students = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 14 },
  { name: "David", age: 18 },
  { name: "Ella", age: 17 },
  { name: "Frank", age: 15 },
  { name: "Grace", age: 13 },
  { name: "Henry", age: 19 },
  { name: "Isabella", age: 16 },
  { name: "Jacob", age: 18 }
];


function FilterStudent(student) {
  let studentss = student.filter((std) => {
    return std.age >= 13 && std.age <= 19 && (std.name.includes('a') && std.name.length <= 6);
  })
  return studentss;
}

console.log(FilterStudent(students));
