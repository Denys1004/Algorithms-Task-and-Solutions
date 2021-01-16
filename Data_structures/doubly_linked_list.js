// Doubly Linked List
class Node{
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

    // PUSH - adds element to the end of the list
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            console.log("PUSH - true");
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            console.log("PUSH - true");
        }
        this.length += 1
        return this;
    }

    // POP - removes element from the end of the list
    pop(){
        if(this.head === null) return undefined;
        let old_tail = this.tail; // saving curent tail
        if(this.length === 1){  // if length is 1 means we deleting the last element
            this.head = null;
            this.tail = null;
        }else{
            this.tail = old_tail.prev; // making prev element as  curent tail
            this.tail.next = null; // removing pointer  next
            old_tail.prev = null; // removing pointer  prev
            console.log("POP - true");
        }
        this.length -=1;
        return old_tail;
    }

    // SHIFT - removes node from the beginning of the list
    shift(){
        if(this.head === null) return undefined;
        let old_head = this.head;
        if(this.length === 1){  // if length is 1 means we deleting the last element
            this.head = null;
            this.tail = null;
        }else{
            this.head = old_head.next;
            old_head.next.prev = null;
            old_head.next = null;
            console.log("SHIFT - true");
        }
        this.length -=1;
        return old_head;
    }

    // UNSHIFT - adds node to the beginning of the list
    unshift(val){
        if(this.head === null) return undefined;
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length +=1;
        return this;
    }

    // GET - accepts the node num and returns value of this node
    get(index_num){
        if(index_num<0 || index_num>=this.length) return null; 
        let middle = this.length /2;
        let counter;
        let curent_node;
        if(index_num <= middle){
            counter = 0;
            curent_node = this.head;
            while(counter !== index_num){
                curent_node = curent_node.next;
                counter += 1;
            }
        }else{
            counter = this.length-1;
            curent_node = this.tail;
            while(counter !== index_num){
                curent_node = curent_node.prev;
                counter -= 1;
            }
        }
        console.log(`GET -your node is: ${curent_node.val}`);
        return curent_node;
    }

    // SET - accepts position of the node and a new value to update.
    set(index_num, value){
        var needed_node = this.get(index_num);
        if(needed_node !== null){
            needed_node.val = value;
            console.log("SET - success!");
            return true;
        }
        console.log("SET - Doesn't work");
        return false;
    }

    // INSERT - accepts position and value,  inserts a new node at position we specify
    insert(index_num, value){
        if(index_num<0 || index_num>this.length) return false;
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
        let next_position = before_position.next;

        before_position.next = newNode, newNode.prev = before_position;
        newNode.next = next_position, next_position.prev = newNode;
        this.length +=1;
        return true;
    }

    // REMOVE - accepts position and  removes  node from this  position
    remove(index_num){
        if(index_num<0 || index_num>=this.length) return undefined;
        if(index_num===0) return this.shift();
        if(index_num===this.length-1) return this.pop();

        let before_position = this.get(index_num-1); // 1. we neet to find item at the position one before!!
        let removed = before_position.next;
        let next_position = before_position.next.next;

        before_position.next = next_position, next_position.prev = before_position;
        removed.next = null, removed.prev = null; 

        this.length -=1;
        console.log("REMOVE - true");
        return removed;
    }

    print(){
        let arr = [];
        let curent = this.head;
        while(curent){
            arr.push(curent.val)
            curent = curent.next;
        }
        console.log(arr);
        return this;
    }

    reverse(){
        let cur_head = this.head; // меняем местами head and tail
        this.head = this.tail;
        this.tail = cur_head;


        let next = null;
        let prev = null;
        let curent = this.head;

        for(let i=0; i<this.length; i++){
            next = curent.prev;
            next.prev = curent;
            curent.next = next;
            curent.prev = prev;

            curent = next;
            
        }
        print()
        console.log(this);
        return this;
    }


}

let list = new DoublyLinkedList()
list.push('Node1')
list.push('Node2')
list.push('Node3')
list.push('Node4')
list.push('Node5')
list.push('Node6')
list.push('Node7')
list.push('Node8')
// list.push("Node3")

console.log(list);
list.print()
list.reverse()
list.print()
// list.pop()

console.log(list);
