const arr = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.mReduce = function (callback, initialValue) {
    if (!Array.isArray) return `${this} is not an arrayy`;

    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i], i, this) : this[i];
    }
    return acc;
}

const abc = arr.mReduce((a, b) => a + b);
console.log(abc);