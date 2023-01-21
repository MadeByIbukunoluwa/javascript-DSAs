


let q = []


q.push('hello')

q.pop()

class node {
    constructor(value) {
        this.value = value 
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        var newnode = new node(val)
        if (!this.first) {
            this.first = newnode
            this.last = newnode
        }   
        else {
                this.last.next = newnode
                this.last = newnode
        }
        return ++this.size 
    } 
    dequeue() {
        if (!this.first) return null
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next 
        this.size--
        return temp.value 
    }
}

let newqueue = new Queue()

newqueue.enqueue('hello')
newqueue.enqueue('hello')
newqueue.enqueue('hello')

console.log(newqueue)