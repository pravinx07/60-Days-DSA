/*
Stack wrok on LIFO
last is first out => jo last ayga vo firsat jayega 
bcos stack is close from one side
 */

// stack using array

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
