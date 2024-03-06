// Branch Name: B2_W6_D1

/* Question 11: Log the maximum safe integer value in JavaScript by using Number.MAX_SAFE_INTEGER method
*/

let arr=[1,2,3,4,5,6,7];

function MyFiltere(arr,fn) {
    let abc=[];
    fn=()=>{
        for (let i = 0; i < arr.length; i++) {
            abc.push(arr[i]);
        }
    }
    return abc;
}

console.log(MyFiltere(arr,));