// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

// bad way to represent linked list

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// console.log(first)

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
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

let list = new SinglyLinkedList
list.push("Hello")
list.push("Goodbye")
console.log(list.head)
console.log(list.head.next)

// Pushing 
// add a new to the end of the list

// the function should accept a value
// create a node using the value to the function
// if there is no head property on the list, set the head and tail to be the newly created node
// otherwise set the next property on the tail to be the new node and set the tail property on the
// list to be the newly created node
// increment the length by one