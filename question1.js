// Problem Statement

// Given a string, write a function that uses a stack to reverse the string. The function should return the reversed string.

// Examples

// Example 1:

// Input: "Hello, World!"
// Output: "!dlroW ,olleH"


let str = "Hello, World!";

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


function Arrayy(s) {
    const stack = new Stack(s.length);
    for (let i = 0; i < s.length; i++) {
        stack.stackPush(s[i]);
    }
    let str='';
    while (stack.stackSize!==0) {
        str+=stack.stackPop();
    }
    return str;
}

console.log(Arrayy(str));


