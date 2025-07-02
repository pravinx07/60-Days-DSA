

// stack works on LIFO  Last in first out 

class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
      this.stack.push(item)
    }

    pop(){
       if(this.isEmpty()) return "Stack is empty cant do pop"

       return this.stack.pop()
    }

    peek(){
       if(this.isEmpty()) return "Stack is empty cant do peek"

       return this.stack[this.stack.length-1]

    }

    isEmpty(){
       return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    print(){
        let arr = []

        if(this.isEmpty()) return "stack is empty"
        for(let i = 0; i < this.stack.length; i++){
            arr.push(this.stack[i])
        }
        console.log(arr);
        // return arr
        
    }

}

const stack = new Stack()

stack.push(20)
stack.push(80)
stack.push(2)
// console.log(stack.print);

// console.log(stack.pop())
stack.size()
console.log(stack.size())
stack.print()
// console.log("Stack: ", stack.print())