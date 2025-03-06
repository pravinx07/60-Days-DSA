/*
Stack wrok on LIFO
last is first out => jo last ayga vo firsat jayega 
bcos stack is close from one side
 */

// stack using array

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items.pop()
    }

    // getting the top element of the stack

  top(){
    if(this.isEmpty()){
        return "Stack is empty"
    }

    return this.items[this.items.length - 1]
  }

    isEmpty(){
        this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items);
        
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(50)  
console.log(stack.top());  // 50
console.log(stack.pop());  // remove last element
console.log(stack.size());



stack.print()