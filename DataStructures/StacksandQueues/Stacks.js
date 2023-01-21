// let stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("Youtube");

// stack.pop();

// stack.shift();

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push (val) {
        let newnode = new node(val)
        if (!this.first) {
            this.first = newnode
            this.last = newnode
        }
        else {
            let temp = this.first
            this.first = newnode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
        if (this.size === 0 ) return null
        let temp = this.first
        if (this.size === 1 ) {
            this.first = null
            this.last = null
        }
        // if (this.first == this.last) {
            // this.last = null 
        // }
        else {
            this.first = this.first.next 
        }
        this.size--
        return temp.value
    }
}


let stack = new Stack()

stack.push('hello')
stack.push('hi')
stack.push('are')
stack.push('you')
stack.pop()
console.log(stack)