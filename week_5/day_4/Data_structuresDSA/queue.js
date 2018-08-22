class Queue {
    constructor() {
        this.queue = []
    }
    print(){
        console.log(this.queue);
    }   
    enqueue(x) {
        this.queue[this.queue.length] = x
    }
    
    isEmpty() {
        if (this.queue.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    dequeue() {
        if(this.isEmpty()) {
            return null;
        } else{
        let first = this.queue[0]
        this.queue.splice(0,1)
        return first;
        }
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        } else{
        return this.queue[0]
        }
    }

}
//Use this code to test your stack:
var myQueue = new Queue();
console.log(myQueue.isEmpty());    //true
console.log(myQueue.print());      //[]
console.log(myQueue.enqueue(2));      
console.log(myQueue.isEmpty());     //false
console.log(myQueue.enqueue(4));      
console.log(myQueue.print());      //[2,4]
console.log(myQueue.peek());       //2
console.log(myQueue.dequeue());      
console.log(myQueue.print());
console.log(myQueue.dequeue());
console.log(myQueue.peek());       //null
console.log(myQueue.isEmpty());    //true