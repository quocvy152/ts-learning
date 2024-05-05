class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
        // this.stack[this.stack.length] = data;
    }

    pop() {
        if(this.stack.length === 0) return null;

        const itemPop = this.stack.pop();
        // const itemPop = this.stack[this.stack.length - 1];
        // this.stack.splice(this.stack.length - 1, 1);
        
        return itemPop;
    }

    printStack() {
        let strStack = '';
        for(let i = 0; i < this.stack.length; i++) {
            strStack += (this.stack[i] + ' ');
        }
        return strStack;
    }
}

const stackList = new Stack();

stackList.push(1);
stackList.push(3);
stackList.push(10);
stackList.push(-20);
stackList.push(22);
stackList.push(-32);

console.log(stackList.printStack());

let getItemFromLatest = stackList.pop();

console.log(stackList.printStack());