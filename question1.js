// Problem Statement

// Given an array, print the Next Greater Element (NGE) for every element.
// The Next Greater Element for an element x is the first greater element on the right side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Examples

// Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

// Example 2:
// Input: [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

// Example 3:
// Input: [1, 2, 3, 4, 5]
// Output: [2, 3, 4, 5, -1]

class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
        this.stackSize = 0;
    }
    peek() {
        if (this.stackSize == 0) {
            return 'Stack is empty'
        } else {
            const lastElem = this.stackPop();
            this.stackPush(lastElem);
            return lastElem
        }
    }
    isEmpty() {
        return this.stackSize === 0 ? true : false;
    }
    stackPush(item) {
        //watching for stack overflow issue
        if (this.stackSize >= this.maxSize) {
            return new Error('Stack overflow');
        }
        this.stack.push(item);
        this.stackSize += 1;
        return this.stackSize;
    }
    stackPop() {
        //watching for stack underflow issues
        if (this.stackSize === 0) {
            return new Error('Stack underflow');
        }
        this.removeItem = this.stack.pop();
        this.stackSize -= 1;
        return this.removeItem
    }
}

// let arr = [4, 5, 2, 25]
let arr = [13, 7, 6, 12]

function Arrrayyy(num) {
    let numss = [...num];

    let stack = new Stack(num.length);
    for (let i = numss.length-1; i >= 0; i--) {
        while (!stack.isEmpty() && numss[i]>stack.peek()) {
            stack.stackPop();
        }
        num[i]= stack.isEmpty()?-1:stack.peek()
        stack.stackPush(numss[i]);
    }
    return num;
}
console.log(Arrrayyy(arr));

