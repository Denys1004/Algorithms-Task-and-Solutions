// singly_linked_list

// Example 1
// ****************************************************************
// Create Singly Linked List
// You should be able to do:
// let list = new SinglyLinkedList()
// list.push("Hello")
// list.push("Goodbuy!") ... and so on

class Node{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH - adds node at the end!
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            console.log("PUSH - true");
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length += 1;
            console.log("PUSH - true");
        }
        return this;
    }

    //POP - removes node from the end!
    pop(){ 
        if(!this.head) return undefined;
        let current = this.head; 
        let newTail = current;
        while(current.next){ // looping over the list and saving last node ( as current.next ) and secondfrom the last( as a newTail )
            newTail = current; // new tail shoul be one sted behind
            current = current.next; // current moving forward
        }
        this.tail = newTail;
        this.tail.next = null;
        console.log("POP - true");
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // SHIFT - removes node from the beginning of the list
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        console.log("SHIFT - true");
        this.length -= 1;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return  current;
    }

    // UNSHIFT - adds node to the beginning of the list
    unshift(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            console.log("UNSHIFT - true");
        }else{
            newNode.next = this.head;
            this.head = newNode;
            console.log("UNSHIFT - true");
        }
        this.length += 1;
        return this;
    }

    // GET - accepts the node num and returns value of this node
    get(index_num){
        if(index_num<0 || index_num>=this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index_num){
            current = current.next;
            count +=1;
        }
        // console.log(`your position is ${index_num} and value is ${current.val}`);
        console.log("GET - true");
        return current;
    }

    // SET - accepts position of the node and a new value to update.
    set(index_num, value){
        let needed_node = this.get(index_num);
        if(needed_node){
            needed_node.val = value;
            console.log("SET - true");
            return true;
        }
        console.log("SET - false");
        return false;
    }

    // INSERT - accepts position and value,  insrts a new node at position we specify
    insert(index_num, value){
        if(index_num<0 || index_num>this.length){
            console.log("INSERT - false");
            return false;
        }
        if(index_num===0){
            this.unshift(value);
            console.log("INSERT using UNSHIFT - true");
            return true;
        } 
        if(index_num===this.length){
            this.push(value);
            console.log("INSERT using PUSH - true");
            return true;
        } 
        let newNode = new Node(value);
        let before_position = this.get(index_num-1); // 1. we neet to find item at the position one before!!
        let needed_position = before_position.next;
        before_position.next = newNode;
        newNode.next = needed_position;
        this.length +=1;
        console.log("INSERT - true");
        return true;
    }

    // REMOVE - accepts position and  removes  node from this  position
    remove(index_num){
        if(index_num<0 || index_num>=this.length) return undefined;
        if(index_num===0) return this.shift();
        if(index_num===this.length-1) return this.pop();

        let before_position = this.get(index_num-1); // 1. we neet to find item at the position one before!!
        let removed = before_position.next;
        before_position.next = removed.next;
        this.length -=1;
        console.log("REMOVE - true");
        return removed;
    }

    // PRINT - prints all elements of the linked list
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }

    // REVERSE  - reverses list
    reverse(){
        let current = this.head; // 1. Saving node1 into currentNode            // node1
        this.head = this.tail;             // 2. Making tail as head
        this.tail = current;         // 3. Making currentNode as tail

        let next = null;  // 4. Creating two variables
        let prev= null; 

        for(let i=0; i<this.length; i++){
            next = current.next;  // Saving node2                                  // node2
            current.next = prev; // Before node1 is null         // null <= node1
            prev = current; // saving node1 into previous
            current = next; // moving one step over 
        }
        return  this;
    }
}

let list = new SinglyLinkedList()
list.push("Node1")
list.push("Node2")
list.push("Node3")
// list.push("Item 2")
// list.push("Item 3")
// list.push("Item 4")
// list.push("Item 5")
// list.push("Item 6")
// console.log(`leng`);
// list.get(2)
// list.set(2, "Fucking Item")
// list.set(-20, "Fucking Item")
list.print()
list.reverse()
list.print()

// console.log(list);
// console.log(list);
// list.pop()
// list.pop()
// list.pop()
// list.push("Item 3")
// list.push("Item 4")
// list.unshift("START")

