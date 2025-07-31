// Implementing heap using array


class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i - 1 )/ 2)
    }
    getLeftindex(i){
        return 2 * i + 1
    }

     getRightindex(i){
        return 2 * i + 2
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()

    }

    heapifyUp(){

        let index = this.heap.length - 1;
        while(this.heap.length > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]){
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    extractMin(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();


        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min;
 
    }

    heapifyDown(){
        let index = 0
        let length = this.heap.length;
        while(this.getLeftindex(index) < length){
            let smallest = this.getLeftindex(index)
            let right = this.getRightindex(index)

            if(right < length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }

            if(this.heap[index] <= this.heap[smallest]) break;

            this.swap(index, smallest)
            index = smallest
        }
    }

    peek(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size(){
        return this.heap.length;
    }

    print(){
        console.log("Heap Array : => ",this.heap);
        
    }
}

let h = new MinHeap()
h.insert(4)
h.insert(30)
h.insert(7)
h.insert(9)
h.insert(10)
h.insert(1)
h.insert(12)

h.print()
console.log(h.extractMin());
h.print()


