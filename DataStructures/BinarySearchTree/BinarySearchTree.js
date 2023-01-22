

class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newnode = new node(value)
        if (this.root === null) {
            this.root = newnode
            return this 
        } else {
            let current = this.root 
            while(true) {
                if (value === current.value) return undefined 
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newnode
                        return this
                    }
                    else {
                        current = current.left
                    }
                }
                else if(value > current.value) {
                        if (current.right === null) {
                        current.right = newnode
                        return this 
                    }
                    else {
                        current = current.right
                    }
                }
            }
        }
    }
    //My attempt - maximum call stack size exceeded 
    // find(val) {
    //     if (this.root === null) return false 
    //     // let current = this.root 
    //     if (this.root.value === val) return true 
    //     else if (val > this.root.value) {
    //         if (this.root.right) {
    //             return this.find(val) 
    //         }
    //     }
    //    else if (val < this.root.value) {
    //         if (this.root.left) {
    //            return  this.find(val)
    //         }
    //    }
    // }
    find(value) {
        if (this.root === null) return false 
        let current = this.root
        let found = false 
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            }
            else if (value > current.value) {
                current = current.right
            }
            else {
                return true 
            }
        }
        return false
    }
}

let tree = new BST()

// tree.root = new node(10)
// tree.root.right = new node(15)

// tree.root.left = new node(7)
// tree.root.left.right = new node(9)
// tree.root.left.left = new node(5)
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree.find(16))
console.log(tree)