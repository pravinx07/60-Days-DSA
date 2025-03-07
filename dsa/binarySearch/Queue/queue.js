/*queue => woek on FIFO
first in firt out
enqueue => adding the elemnt in the queue from back side
dequeue() => taking out the element 
peek => give the front element
isEmpty => 
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


