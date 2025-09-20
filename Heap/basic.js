class MinHeap{
    constructor(){
        this.heap = []
        // this.heap = [5,10,20,30]
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2);
    }

    getLeftChild(i){
        return 2 * i + 1;
    }
    getRightChild(i){
        return 2 * i + 2;
    }


    insert(val){
        this.heap.push(val);
        let lastIndex = this.heap.length - 1;
        this.heapiFyUp(lastIndex)
    }

    heapiFyUp(i){
      while(i > 0){
        let parentIndex = this.getParentIndex(i);
        if(this.heap[i] < this.heap[parentIndex]){
            [this.heap[i], this.heap[parentIndex]] = 
             [this.heap[parentIndex], this.heap[i]];
             i = parentIndex;
        }else{
            break;
        }
      }
    }

    extract(){
        if(!this.heap.length) return null;
        let min = this.heap[0]

        let lastIndex = this.heap.length - 1;
        [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]]

        this.heap.pop();
        this.heapiFyDown(0)
        return min;
        
    }

    heapiFyDown(i){
        let left = this.getLeftChild(i);
        let right = this.getRightChild(i);
        let smallest = i;
        let n = this.heap.length;

        if(left < n && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }

        if(right < n && this.heap[right] < this.heap[smallest])
        {
            smallest = right
        }

        if(smallest != i){
            [this.heap[smallest], this.heap[i]] = 
             [this.heap[i], this.heap[smallest]]
             this.heapiFyDown(smallest)
        }
    
    }

    peek(){
        if(!this.heap.length) return null;
        return this.heap[0]
    }
}


let minHeap = new MinHeap()
console.log("MinHeap: ",minHeap.heap);


minHeap.insert(1)
// minHeap.insert(0)

minHeap.insert(5)
minHeap.insert(0)
minHeap.insert(20)
minHeap.insert(3)
minHeap.extract()

console.log(minHeap.peek());


console.log(minHeap.heap);

