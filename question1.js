// Problem Statement

// Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.

// Examples

// Example 1:

// Input: 2
// Output: "10"

let num = 2;

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

function Arrayy(nums) {
    let stack = new Stack();
    let str = '';
    
    while (nums !== 0) {
        if (nums % 2 == 0) {
            // str += "0";
            stack.stackPush("0");
        } else {
            // str += "1"
            stack.stackPush("1");
        }
        nums = Math.floor(nums / 2);
    }
    return stack
}


console.log(Arrayy(num));






