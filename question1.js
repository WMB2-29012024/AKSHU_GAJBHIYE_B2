// Problem Statement

// Given an absolute file path in a Unix-style file system, simplify it by converting “..” to the previous directory and removing any “.” or multiple slashes. The resulting string should represent the shortest absolute path.

// Examples:

// Example 1.

// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"

let str = "/a//b////c/d//././/.."

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

function Arrayyy(s) {
    let stack = new Stack(s.length);
    let a = s.split("/")
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= "a" && a[i] <= "z") {
            stack.stackPush(a[i]);
        } else if (a[i] == '..') {
            stack.stackPop(a[i]);

        }
    }
    let ans="";
    while (!stack.isEmpty()) {
        ans="/"+stack.stackPop()+ans;
    }
    return ans;
}

console.log(Arrayyy(str));

