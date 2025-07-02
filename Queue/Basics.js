// Implementing Queue


class Queue{
    constructor()
    {
        this.itmes = []
    }

    // enqueue add element form the rear/end
    enque(value){
        this.itmes.push(value)
    }

     // dequeue remove and returns the fisrt element of the queue
    dequeue(){
        return this.isEmpty() ? "Queue is empty":this.itmes.shift()
    }

    isEmpty(){
       return this.itmes.length === 0
    }

    peek(){
        return this.isEmpty() ? "Queue is empty " : this.itmes[0]
    }

    size(){
        return this.isEmpty() ? "Queue is empty": this.itmes.length
    }

    print(){
        console.log(this.itmes.join(" -> "));
        
    }
}

let q = new Queue()
q.enque(2)
q.enque(5)
q.dequeue()
q.enque(3)
q.enque(9)
console.log(q.isEmpty())
console.log(q.size())
console.log(q.peek());

q.print()