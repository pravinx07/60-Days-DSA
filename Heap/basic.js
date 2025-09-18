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
}


let minHeap = new MinHeap()
console.log("MinHeap: ",minHeap.heap);


minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(0)
minHeap.insert(20)
minHeap.insert(3)


console.log(minHeap.heap);

