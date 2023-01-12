
class node {
    constructor(val){
        this.val = val 
        this.next = null  
    }
}

let first = new node('Hi')

// console.log(first.next = new Node('Hello'))
// console.log(first.next.next = new Node('there'))
// console.log(first.next.next.next = new Node('How'))
// console.log((first.next.next.next.next = new Node("are")));
// console.log(first.next.next.next.next.next = new Node('You'))

// // 

//Attempt 1 at implmenting the push method from scratch 
// class SinglyLinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0 
//     }
//     push (val) {
//      let newNode = new node(val) 
//      if (!this.head) {            
//         this.head = newNode;       
//         this.tail = newNode;
//      }
//      else {
//         this.tail.next = newNode
//         this.tail = newNode 
//         this.length++
//      }
//      return this 
//     }
// }
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let newlist = new SinglyLinkedList()
let updatedList = newlist.push('Node1')
console.log(updatedList)
