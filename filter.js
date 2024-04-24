const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myFilter = function (callback) {
    if (!Array.isArray(this)) {
        return `${this} is not an Array`
    }

    let new_Array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            new_Array.push(this[i]);
        }
    }
    return new_Array;
}
const abc = arr.myFilter((e) => {
    return e % 2
})
console.log(abc);