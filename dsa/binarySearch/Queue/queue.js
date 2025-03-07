/*queue => woek on FIFO
first in firt out
enqueue => adding the elemnt in the queue from back side
dequeue() => taking out the element 
peek => give the front element
isEmpty => 
size => size of the queue
*/
class Queue {
  constructor() {
    // respnsible for intializing variable in class
    this.queue = [];
  }

  enqueue(element){
    this.queue.push(element)
  }

  dequeue(){
   if(this.isEmpty()){
    return "Underflow"
   }

   return this.queue.shift()  // use to remove first element of the array
  }

 front(){
    if(this.isEmpty()){
        return "No element in queue"
    }

    return this.queue[0]
 }

  isEmpty(){
  return this.size() === 0;
  }

  size(){
    return this.queue.length
  }

  printQueue(){
    let queueStr = ""
    for(let i = 0; i < this.size(); i++){
        queueStr += this.queue[i] + ", "
    }
    console.log("Queue : " + queueStr);
    
  }
}


const myQueue = new Queue()
myQueue.enqueue(200)
myQueue.enqueue(400)
myQueue.enqueue(300)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.front());
console.log(myQueue.size());

console.log(myQueue.printQueue());
