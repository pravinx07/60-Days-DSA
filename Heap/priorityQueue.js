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


// let pq = new PriorityQueue()
// pq.enqueue("Gym",5)
// pq.enqueue("running",2)
// pq.enqueue("writing",7)
// pq.enqueue("eat",1)

// console.log((pq.queue));
// pq.dequeue()
// console.log((pq.queue));
// console.log((pq.peek()));
// console.log(pq.isEmpty());



class MaxPriorityQueue{
    constructor(){
        this.heap = [];
    }

    // Enqueue

    enqueue(val,priority){
        this.heap.push({val,priority})
        this.heapiFyUp();
    }


    dequeue(){
        if(this.heap.length === 0) return null

        const max = this.heap[0];
        let end = this.heap.pop();

        if(this.heap.length > 0){this.heap[0] = end;
        this.heapiFyDown();
    }

        return max;
    }
    heapiFyUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parent = Math.floor((index - 1) / 2);

            if(this.heap[index].priority <= this.heap[parent].priority) break;
                this.swap(index,parent)
                index = parent;
            
        }
    }


    heapiFyDown(){
        let index = 0;
        let n = this.heap.length;

        while(true){
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if(left < n && this.heap[left].priority > this.heap[largest].priority){
                largest = left
            }

            if(right < n && this.heap[right].priority > this.heap[largest].priority){
                largest = right
            }

            if(largest === index) break;
                this.swap(index,largest)
                index = largest
            
        }

    }
    front(){
        return this.heap.length > 0 ? this.heap[0]:null
    }

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.heap.length === 0;
    }
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }
}


let pq = new MaxPriorityQueue();
pq.enqueue("xyz",0)
pq.enqueue("x",3)
pq.enqueue("a",1)
pq.enqueue("z",8)

pq.dequeue();
console.log(pq.heap);
// console.log(pq.isEmpty());
console.log(pq.front());
console.log(pq.size());



