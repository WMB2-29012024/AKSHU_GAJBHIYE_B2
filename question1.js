// Problem Statement

// Given a stack, sort it using only stack operations (push and pop).

// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top



// Examples

// Input: [34, 3, 31, 98, 92, 23]
// Output: [3, 23, 31, 34, 92, 98]

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

let arr = [34, 3, 31, 98, 92, 23];

function Arrrrayyyy(num) {

    return num;
}

console.log(Arrrrayyyy(arr));
