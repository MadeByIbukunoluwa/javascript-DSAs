


class node {
    constructor(val) {
        this.val = val 
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push (val) {
        let newnode = new node(val)
        if(this.head === null) {
            this.head = newnode
            this.tail = newnode
        }
       else {
         this.tail.next = newnode;
         newnode.prev = this.tail;
         this.tail = newnode;
       }
        this.length++
        return this 
    }
   pop() {
       if (!this.head) return undefined
       let poppedNode = this.tail 
       if (this.length === 1 ) {
            this.head = null
            this.tail = null 
       }
       else {
        this.tail = poppedNode.prev
        this.tail.next = null 
       }
       this.length--
       return poppedNode
   }
   shift() {
    if (this.length === 0 ) return undefined 
    let oldhead = this.head
    if (this.length === 1 ) {
        this.head = null
        this.tail = null
    }
    this.head = oldhead.next 
    this.head.prev = null
    oldhead.next = null
    this.length--
    return oldhead
   }
   unShift(val) {
    let newnode = new node(val)
    if (this.length === 0 ) {
        this.head = newnode
        this.tail = newnode 
    }
    else {
     this.head.prev = newnode 
      newnode.next = this.head 
     this.head = newnode
    }
    this.length++
    return this
   }
   get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
           let count = 0 
           let current = this.head 
        while (count !== index) {
            current = current.next
            count++
        }
        return current 
   } 

   else {
    let count = this.length - 1 
    let current = this.tail 
    while (count != index) {
        current = current.prev 
        count--
    }
    return current 
}
 }
 set (index,val) {
    var foundNode = this.get(index)
    if (foundNode != null) {
        foundNode.val = val 
        return true
    }
    return false 
 }
 insert (index,val) {
        if (index < 0 || index >= this.length) return false 
        if (index === 0 ) !!this.unShift(val)
        if (index === this.length) !!this.push(val)
        let newnode = new node(val)
        let beforenode = this.get(index - 1 )
        let afternode = beforenode.next 
        
        beforenode.next = newnode, newnode.prev = beforenode
        newnode.next = afternode, afternode.prev = newnode 
        this.length++
        return true
 }
 remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0 ) this.shift()
    if (index === this.length - 1) return this.pop()
    let removednode = this.get(index)
    let beforenode = removednode.prev
    let afternode = removednode.next 
    beforenode.next = afternode
    afternode.prev = beforenode
    // removednode.prev.next = removednode.next
    // removednode.next.prev = removednode.prev 
    removednode.next = null
    removednode.prev = null
    this.length--
    return removednode
 }
}

let dll = new DoublyLinkedList();
let newnode = new node("first dll node");
newnode.next = new node("next first dll node");
newnode.next.prev = new node("prev first dll node");
// console.log(newnode)
dll.push("latest node");
dll.push("latest node 1");
dll.push("latest node 2");
dll.pop();
// console.log(dll.pop())
// dll.shift()
// dll.shift()
dll.unShift("newest node");
dll.set(1,'set node')
dll.insert(2,'inserted node')
dll.remove(1)
console.log(dll);

