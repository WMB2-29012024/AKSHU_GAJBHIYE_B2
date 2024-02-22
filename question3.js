const strArr = "asdasdzxczxc";

function rev(arr) {
    let ab = []
    for (let i = arr.length - 1; i >= 0; i--) {
        ab.push(arr[i]);
    }
    let b=ab.join('')
    return b;
}
console.log(rev(strArr));

