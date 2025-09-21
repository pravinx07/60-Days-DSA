// Implementing Priority queue using queue and 
// sorting it 


class PriorityQueue{
    constructor(){
        this.queue = []
    }

    enqueue(value, priority){
        this.queue.push({value,priority})
        this.queue.sort((a,b) => b.priority - a.priority) //
        // highest priority first
    }

    dequeue(){
        if(this.queue.length === 0) return null;
        return this.queue.shift(); // remove first element bcos heap queue is sorted
    }

    peek(){
        if(this.queue.length === 0) return null;
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}


let pq = new PriorityQueue()
// pq.enqueue("Gym",5)
// pq.enqueue("running",2)
// pq.enqueue("writing",7)
// pq.enqueue("eat",1)

console.log((pq.queue));
pq.dequeue()
console.log((pq.queue));
console.log((pq.peek()));
console.log(pq.isEmpty());


