// The only attribute of the Singly Linked List is a head Node

class Node{ // 1. creating class
    constructor(value){ // 2. constructor accepts value, it is the only thing that will change from node to node
        this.value = value;
        this.next = null; // 3. regardles of the node,  next allways points to nothing by default
    }
}

// 4. Lets make some node:
var first_node = new Node("1-Duy");
var second_node = new Node("2-Brian");
var third_node = new Node("3-Alex");

// console.log(first_node); // we'll have:   Node { value: 10, next: null }

// 5. How do we construct the Singly Linked List? How do we attach nodes? We passing next node into 
first_node.next = second_node; 
second_node.next = third_node;

// console.log(first_node.next.next.value);

// 6. Now imagine you have 100 nodes. Its very unconfrtable to write all nodes by heands. 
// Thats why we need to create class for SLL:
class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    // add to front 
    addFront(value){
        let currentList = this.head; // saving current into a variable
        this.head = new Node(value); // making new head
        this.head.next = currentList; // adding existing list
        return this;
    }
    // 7. It is not a most afficient view of out linked list, so we build display_list method
    // display
    display_list(){
        let monkey = this.head
        let count = 1
        while(monkey){ // while(monkey !== null)
            console.log(`Current Node : ${monkey}, Current Value :${monkey.value}, Count: ${count}`);
            monkey = monkey.next;  // to move forward in or loop 
            count +=1;
        }
        return this
    }

}
var first_sll = new SLL(2);
console.log(first_sll.addFront(4).addFront(6).addFront(8).addFront(10).display_list()); // SLL { head: Node { value: 10, next: Node { value: 8, next: [Node] } } }







// EXERCISES
// ******************************************************************************************************************

// addFront() 
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// front()
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// removeFront()
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// contains()
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

// length()
// Create a new SLL method length() that returns number of nodes in that list.

// display()
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class Node{ 
    constructor(value){ 
        this.value = value;
        this.next = null;
    }
}
class SLL{
    constructor(value){
        this.head = new Node(value);
    }
    addFront(value){
        let current_list = this.head;
        this.head = new Node(value);
        this.head.next = current_list;
        return this;
    }
    front(){
        if(this.head){
            return this.head.value;
        }
        return null;
    }
    removeFront(){
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    contains(value) {
        let runner = this.head;
        while(runner){
            if(runner.value === value){
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    length(){
        let runner = this.head;
        let num_of_nodes = 0;
        while(runner){
            num_of_nodes +=1;
            monkey = monkey.next;
        }
        return num_of_nodes;
    }

    display(){
        let runner = this.head;
        var output = "";
        while(runner) {
            output += runner.value + " "
            runner = runner.next;
        }
        return output;
    }

}
