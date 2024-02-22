const numArr=[1,2,3,4,5,6,7,8,9,10];


function even(arr) {
    let abc=[];
    for (let i = 0; i < arr.length; i=i+2) {
        abc.push(arr[i]);
    }
    return abc;
}

console.log(even(numArr));