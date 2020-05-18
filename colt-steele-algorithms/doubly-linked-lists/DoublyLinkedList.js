class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        const poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    
}

const list = new DoublyLinkedList();

// push
// add a node to the END of the Doubly Linked List
// create a new node with the value passed to the function
// if the head property is null, set the head and tail to the newly created node
// if not, set the next property on the tail to be that node
// set the previous property on the newly created node to be the tail
// set the tail to be the newly created node
// increment the length
// return the doubly linked list

list.push(99);
list.push(100);

// pop

// remove a node from the end of the doubly linked list
// if there is no head/tail - return undefined
// store the current tail in a variable to return later
// if length is 1, set the head and tail to null
// update the tail to be the previous Node
// set the new tails next to be null
// decrement the length
// return the value removed

// console.log(list.pop());

// shifting 
// removes a node from the beginning of the beginning of a Doubly Linked List
// if length is 0 - return undefined
// store the current head property in a variable
// if length is one  - set head and tail to be nail
// update the head to be the next of the old head
// update the new head prev to be null
// decrement the length

console.log(list.shift());