/*queue => work on FIFO
first in firt out
enqueue => adding the elemnt in the queue from rear side
dequeue() => taking out the element 
peek => give the front element
isEmpty => length == 0
size => size of the queue
*/
// class Queue {
//   constructor() {
//     // respnsible for intializing variable in class
//     this.queue = [];
//   }

//   enqueue(element){
//     this.queue.push(element)
//   }

//   dequeue(){
//    if(this.isEmpty()){
//     return "Underflow"
//    }

//    return this.queue.shift()  // use to remove first element of the array
//   }

//  front(){
//     if(this.isEmpty()){
//         return "No element in queue"
//     }

//     return this.queue[0]
//  }

//   isEmpty(){
//   return this.size() === 0;
//   }

//   size(){
//     return this.queue.length
//   }

//   printQueue(){
//     let queueStr = ""
//     for(let i = 0; i < this.size(); i++){
//         queueStr += this.queue[i] + ", "
//     }
//     console.log("Queue : " + queueStr);

//   }
// }

// const myQueue = new Queue()
// myQueue.enqueue(200)
// myQueue.enqueue(400)
// myQueue.enqueue(300)
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// console.log(myQueue.front());
// console.log(myQueue.size());

// console.log(myQueue.printQueue());

/*Circular Queue (Fixed Size)
A circular queue is a special type of queue that wraps around when the rear reaches the end.

rear
 */

/*
let MyCirculerQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCirculerQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  return this.queue.push(value);
};

MyCirculerQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

MyCirculerQueue.prototype.front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCirculerQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCirculerQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

MyCirculerQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

let queue = new MyCirculerQueue(5);
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);
queue.enQueue(50);
queue.deQueue();
queue.deQueue();
queue.deQueue();
queue.deQueue();
console.log(queue.front(), queue.Rear());
*/


/*Implement queue using Stacks

 */
/*
let MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.enqueue = function(value){
   this.stack1.push(value)
}
MyQueue.prototype.dequeue = function(){
  if(this.stack2.length === 0){
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}

MyQueue.prototype.front = function () {
    // if(this.stack1.length === 0) return false
    if(this.stack2.length === 0){
      while(this.stack2.length > 0){
          this.stack2.push(this.stack1.pop())
      }
  }
  return this.stack2[this.stack2.length - 1]
}

MyQueue.prototype.rear = function () {
  // if(this.stack1.length === 0) return false
  if(this.stack2.length === 0){
    while(this.stack2.length > 0){
        this.stack2.push(this.stack1.pop())
    }
}
return this.stack2[0]
}

MyQueue.prototype.empty = function(){
  return this.stack1.length === 0 && this.stack2.length === 0
}


let quueue = new MyQueue()

quueue.enqueue(10)
quueue.enqueue(20)
quueue.enqueue(30)
quueue.enqueue(40)
quueue.dequeue()
quueue.enqueue(50)
quueue.enqueue(60)
// quueue.dequeue()
// quueue.dequeue()
// quueue.dequeue()
// quueue.dequeue()

console.log(quueue.front());
console.log(quueue.rear());
console.log(quueue);

*/


// implement stack using 1 stack

let MyQueue = function(){
  this.stack = []
}

MyQueue.prototype.enQueue = function(value){
  return this.stack.push(value)
}

MyQueue.prototype.dequeue = function() {
  return this.stack.shift()
}

MyQueue.prototype.front = function(){
  if(this.stack.length === 0){
    return false
  }
  return this.stack[0]
}

MyQueue.prototype.rear = function(){
  if(this.stack.length === 0){
    return false
  }
  return this.stack[this.stack.length - 1]
}

MyQueue.prototype.empty = function(){
  return this.stack.length ? false : true
}

let queue = new MyQueue()
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.dequeue()
queue.dequeue()
console.log(queue.front());
console.log(queue.rear());
console.log(queue.empty());

console.log(queue);
