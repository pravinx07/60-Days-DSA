/*
Stack wrok on LIFO
last is first out => jo last ayga vo firsat jayega 
bcos stack is close from one side
 */

// stack using array
/*
class Stack{
    constructor() {
        this.items = []
        
    }

    push(element){
        this.items.push(element)
        
    }

    pop(){
        if(this.isEmpty()) return
        return this.items.pop()
    }

    top(){
      if(this.isEmpty()) return "stack is empty";
      return this.items[this.items.length - 1]
    }
    
    size(){
        // if(!this.items) return "Stack is empty"
        return this.items.length
    }
    isEmpty(){
       return this.items.length === 0
    }

    print(){
        console.log(this.items);
        
    }

}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
// console.log(stack.print());
console.log(stack.top());

stack.print()
*/

/*Implement Stack using 2 queue
This is done intentionally to maintain the Last In, First Out (LIFO) behavior using a queue, which follows First In, First Out (FIFO).
 */


let MyStack = function (){
   this.q1 = []  // main queue
//    this.q2 = []  // temprorily q2
}
// 2 , 3, 4,5
// q1 = [5] => [5,4,3,2]
// q2 = [4,3,2] => []
MyStack.prototype.push = function(value){
    // while(this.q1.length !== 0){
    //     this.q2.push(this.q1.shift())
    // }
    // this.q1.push(value)
    // while(this.q2.length !== 0){
    //     this.q1.push(this.q2.shift())
    // }
 // using one queue improve performance
    this.q1.push(value); // Insert new element
    let size = this.q1.length;
    while (size > 1) {
        this.q1.push(this.q1.shift()); // Rotate elements to bring new element to front
        size--;
    }
}
MyStack.prototype.pop = function(){
    return this.q1.shift()
}
MyStack.prototype.top = function(){
    return this.q1[0]
}
MyStack.prototype.empty = function(){
    return this.q1.length === 0
}

let stack = new MyStack()
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()

console.log(stack.pop()); // Removes 5
console.log(stack.top()); // 4
console.log(stack.empty()); // false