// Problem Statement

// Given a string s containing (, ), [, ], {, and } characters. Determine if a given string of parentheses is balanced.

// A string of parentheses is considered balanced if every opening parenthesis has a corresponding closing parenthesis in the correct order.

// Example 1:


// Input: String s = "{[()]}";
// Expected Output: true





class Stack {
    constructor(size) {
        this.stack = [];
        this.maxSize = size;
        this.stackSize = 0;
    }
    peek() {
        if (this.stackSize == 0) {
            return "Stack is empty"
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


let s = "{[()]}";
const isValidParanthesis = (s) => {
    const stack = new Stack(s.length);
    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i);
        if (currentChar == '[' || currentChar == '{' || currentChar == '(') {
            stack.stackPush(currentChar);
        } else {
            const peekEleent = stack.peek();
            if (!stack.isEmpty()) {
                let isValid = false;
                switch (currentChar) {
                    case ')':
                        isValid = peekEleent === '(';
                        break;
                    case ']': isValid=peekEleent==='[';
                        break;
                    case '}' : isValid=peekEleent==='{';
                        break;
                }
                if (isValid) {
                    stack.stackPop();
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isValidParanthesis(s));











