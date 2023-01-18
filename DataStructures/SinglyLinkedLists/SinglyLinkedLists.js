
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
  pop () {
    if (!this.head) return undefined
    let current = this.head 
    let newTail = current 
    while (current.next) {
        newTail = current 
        current = current.next 
    }
    this.tail = newTail
    this.tail.next = null 
    this.length--

    if (this.length == 0) {
        this.head = null
        this.tail = null
    }
    return current 
  }
  shift(val) {
        // My attempt 
        // if (!this.head) return undefined; 
        // let head = this.head
        // this.head.next = head 
        // this.length--
        // return head 
         if (!this.head) return undefined; 
         let currentHead = this.head
         this.head = currentHead.next 
         this.length--
         if (this.length === 0 ) {
            this.tail = null
         }
         return currentHead 
  }
  unShift (val) {
        let newNode = new node(val)
       if (!this.head) {
             this.head = newNode;
             this.tail = this.head 
       }

        newNode.next = this.head 
        this.head = newNode 
       this.length++
       return this 
  }
  get (index) {
    // if (index < this.length || index > this.length ) return null
    // let count = 0 
    // while (this.length) {
        
    //     count++
    //     if (count == index) return 
    // }
    if (index < 0 || index >= this.length ) return null
    let counter = 0 
    let current = this.head 
    while (counter !== index) { 
        // console.log(current)
        current = current.next 
        counter++ 
    }
    return current
  }
  insert(index,val) {
       if (index < 0 || index > this.length)  return false 
       if (index === this.length) return !!this.push(val)
    //    The !! operator coerces it to a new boolean value 
       if (index === 0) return !!this.unShift(val)
       let newNode = new node(val)
       let prev = this.get(index - 1)
       let temp = prev.next 
       prev.next = newNode
       newNode.next = temp 
       this.length++
       return true 
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined 
    if (index === 0) return this.shift()
    if (index === this.length - 1 ) return this.pop()
    let previousNode = this.get(index - 1 )
    let removed = previousNode.next 
    previousNode.next = removed.next 
    this.length--
    return removed
  }
  reverse () {
    let node = this.head
    this.tail = node 
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node 
            node = next 
    }
    return this
  }
//   traverse() {
//     let current = this.head
//     while (current) {
//         console.log(current.val)
//         current = current.next
//     }
//     return current
//   }
}

let newlist = new SinglyLinkedList()
let updatedList = newlist.push('Node1').push('Node2').push('Node3')
// console.log(updatedList)
// console.log(updatedList.traverse())
// console.log(updatedList.shift())
// console.log(updatedList.shift())
// console.log(updatedList.shift())
// console.log(updatedList.unShift('newNodeValue'))
console.log(updatedList.get(1))
console.log(updatedList.insert(2,'NewInsertedNode'))
console.log(updatedList)
console.log(updatedList.remove(2))
console.log(updatedList);
console.log(updatedList.reverse())
console.log(updatedList);