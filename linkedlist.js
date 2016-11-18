

class Node {
    constructor(next = null, value = 0) {
        this.next = next;
        this.value = value;
        console.log("Constructing node: " + JSON.stringify(this));
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        console.log("Constructing list: " + JSON.stringify(this));
    }

    push(value) {
        console.log("Adding: " + JSON.stringify(value));
        if(!this.head || !this.tail) {
            var n = new Node(null, value);
            this.head = n;
            this.tail = n;
        } else {
            var n = new Node(this.head.next, value)
            this.head = n;
        }
    }
}



var mylist = new LinkedList();
mylist.push( 1 );
console.log( mylist );
mylist.push( 2 );
console.log( mylist );
mylist.push( 3 );
console.log( mylist );




