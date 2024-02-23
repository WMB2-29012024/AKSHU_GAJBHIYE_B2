// Branch Name: B2_W4_D3

//  Question 14: There are 2 different arrays, write a for-loop, that should log elements at the same index in both the arrays. The loop should run till the longer array's length.

const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12]  



function arreyy(one,two) {
    let third=[];

    let a=one.length;
    let b=two.length
    
    if (a>b) {
        for (let i = 0; i < one.length; i++) {
            third.push(one[i],two[i]);
        }
    }else{
        for (let i = 0; i < two.length; i++) {
            third.push(one[i],two[i]);
        }
    }

    
    return third;
}

console.log(arreyy(numArr1,numArr2));




// [
//     1,         6,         2, 
//     7,         3,         8, 
//     4,         9,         5, 
//     10,        undefined, 11,
//     undefined, 12
//   ]