class Stack 
{
  constructor(){
    this.stack = [];
  }
  print(){
    console.log(this.stack);
  }
  push(x){
      this.stack[this.stack.length] = x
  }
  isEmpty(){
      if (this.stack.length === 0){
      return true
    } else {
        return false
    }
  }
  peek(){
      if (this.isEmpty()) return null;
      else return this.stack[this.stack.length-1]
  }
  pop(){
      if (this.isEmpty()) return null;
      else {
          let last = this.stack[this.stack.length-1]
          this.stack.splice(this.stack.length-1, 1)
          return last;
      }
  }
}

class MinStack extends Stack {
  constructor() {
    super()
    this.minStack = new Stack
  }
  push(x){
    super.push(x); 
    // let that = this 
      if (!this.minStack.peek()) {
        this.minStack.push(x)
      } else if (x < this.minStack.peek()) {
      this.minStack.push(x)
    } else return
  }
  pop() {
    let x = this.stack[this.stack.length-1]
    super.pop();
    if (x === this.minStack.peek()) {
      this.minStack.pop()
    }
  }

  getMin() {
    if (!this.minStack.peek()) {
      return null;
  } else {
    return this.minStack.peek()
  }
  } 
}

//Use this code to test your stack:
// var myStack = new Stack();
// console.log(myStack.isEmpty());    //true
// console.log(myStack.print());      //[]
// console.log(myStack.push(2));      
// console.log(myStack.isEmpty());     //false
// console.log(myStack.push(4));      
// console.log(myStack.print());      //[2,4]
// console.log(myStack.peek());       //4
// console.log(myStack.pop());      
// console.log(myStack.print());
// console.log(myStack.pop());
// console.log(myStack.peek());       //null
// console.log(myStack.isEmpty());    //true

var smallStack = new MinStack();
console.log(smallStack.isEmpty());
console.log(smallStack.push(2))
console.log(smallStack.peek())
console.log(smallStack.push(4))
console.log(smallStack.peek())
// console.log(smallStack.minStack)
console.log(smallStack.getMin())
console.log(smallStack.push(3))
console.log(smallStack.getMin())
console.log(smallStack.push(1))
console.log(smallStack.getMin())
console.log(smallStack.pop())
console.log(smallStack.getMin())
console.log(smallStack.pop())
console.log(smallStack.getMin())
console.log(smallStack.pop())
console.log(smallStack.getMin())
