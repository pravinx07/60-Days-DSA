// implementing max heap

class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i - 1)/2)
    }
    getLeftChildIndex(i){
        return 2 * i + 1
    }
    getRightChildIndex(i){
        return 2 * i + 2
    }

  swap(i,j){
   [this.heap[i], this.heap[j]] = [this.heap[j] , this.heap[i]]
  }

    insert(val){
        this.heap.push(val)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]){
          this.swap(index, this.getParentIndex(index))
          index = this.getParentIndex(index)
        }
        
    }

    extractMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop()

            let max = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifyDown()
            return max
     }

     heapifyDown(){
         let index = 0;
         let length = this.heap.length;

         while(this.getLeftChildIndex(index) < length){
            let biggerChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)

            if(rightChildIndex < length && this.heap[rightChildIndex] > this.heap[biggerChildIndex]){
                biggerChildIndex = rightChildIndex
            }

            if(this.heap[index] >= this.heap[biggerChildIndex]) break;
            this.swap(index, biggerChildIndex)
            index = biggerChildIndex
         }
     }


     peek(){
        return this.heap.length === 0 ? null : this.heap[0]
     }
     print(){
        console.log("Max Heap => ",this.heap);
        
     }
}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(25);

maxHeap.print();  // [30, 25, 5, 10, 20]

console.log("Max:", maxHeap.extractMax());  // 30i
maxHeap.print();  // [25, 20, 5, 10]
