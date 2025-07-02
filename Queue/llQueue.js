// implementing queue using linkedList

class Node {
    constructor(data){
        this.data = data;
        this.next = null

    }
}

class QueueLL{
  constructor(){
    this.front = null
    this.rear = null
    this.size = 0
  }

  enqueue(value){
    const newNode = new Node(value)

    if(this.isEmpty()){
        this.front = newNode
        this.rear = newNode
    }else{
        this.rear.next = newNode
        this.rear = newNode
    }
    this.size++
  }

  dequeue(){
    if(this.isEmpty()){
        return null
    }
    const removeNode = this.front
    this.front = this.front.next
    if(this.front === null){
        this.rear = null
    }
    this.size--
    return removeNode.data
  }

  peek(){
    if(this.isEmpty()){
        return null
    }
    return this.front.data
  }

  getSize(){
    return this.size
  }


  isEmpty(){
    return this.size === 0
  }

  print(){
    let current = this.front
    let que = []
    while(current){
        que.push(current.data)
        current = current.next
    }
    console.log(que.join(" -> "));
    
  }
}

const q = new QueueLL()
q.enqueue(2)
q.enqueue(7)
q.dequeue()
q.enqueue(9)
q.enqueue(8)
q.print()
console.log(q.peek());
console.log(q.getSize());
console.log(q.isEmpty());


