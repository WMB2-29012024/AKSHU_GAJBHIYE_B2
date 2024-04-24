const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
    if (!Array.isArray(this)) {
        return `${this} is not an array`;
    }
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}
const ab = arr.myMap((e) => {
    return e * 2;
})
console.log(ab);


