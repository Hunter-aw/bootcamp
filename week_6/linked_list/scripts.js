class LinkedList {
    constructor(){
        this._length = 0;
        this.head = null;
    }
    print() {
        let currentNode = this.head
        while (currentNode.next) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    addToTheBeginning(value) {
        let newNode = new Node(value)
        newNode.next = this.head //save node chain and connect it to the chain
        this.head = newNode //replace first node
        this._length ++;
    }
    addToTheEnd(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this._length ++;
            return newNode
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this._length ++;
        return newNode
    }

    deleteNode(node) {
        if (this.head === node) {
            this.head = node.next
            this._length --;
            return;
        }
        let currentNode = this.head
        while (currentNode.next !== null) {
            if (currentNode.next === node) {
                currentNode.next = node.next
                this._length--;
                return;
            }
            currentNode = currentNode.next
        }
    }

    removeItemByIndex(index) {
        if (index === 0) {
            this.head = this.head.next;
            this._length--;
            return
        }
        let currentNode = this.head
        for (let i =1; i < index; i++) {
            currentNode = currentNode.next
        }
        currentNode.next = currentNode.next.next
        this._length--;
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let list = new LinkedList();
let newNode = new Node(data)