class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      const toDelete = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return toDelete;
    }

    let current = this.head.next;
    while (current) {
      if (current.value === value) {
        console.log("current.prev.next: ",current.prev.next);
        
        current.prev.next = current.next;
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.length--;
        return current;
      }
      current = current.next;
    }

    return null;
  }

deleteAllOccurance(target){
  let temp = this.head
  while(temp !== null){
    if(temp.value === target){
      if (temp === this.head){
        this.head = this.head.next
        if(this.head) this.head.prev = null
      }

      let nextNode = temp.next
      let prevNode = temp.prev

      if(nextNode !== null) nextNode.prev = prevNode
      if(prevNode !== null) prevNode.next = nextNode
      temp = nextNode

      if(temp === this.tail){
        this.tail = prevNode
      }
    }
    else{
      temp = temp.next
    }
  }
  return this.head
}

sumOfPair(sum){
  // let temp1 = this.head
  
  // let sum = []
  
  // while(temp1 !== null ){
  //   let temp2 = temp1.next
  //   while(temp2 !== null){
  //     if(temp1.value + temp2.value === target){
  //       sum.push(temp1.value, temp2.value)
  //     }
  //     temp2 = temp2.next
  //   }

  //   temp1 = temp1.next
  // }
  // return sum
  // console.log(this.tail.value);

  let left = this.head
  let right = this.tail
   let sumArr = []
  while(left.value < right.value){
   if(left.value + right.value === sum){
    sumArr.push(left.value, right.value)
    left = left.next
    right = right.prev
   }else if(left.value + right.value < sum){
     left = left.next
   }else{
     right = right.prev
   }
  }
  
  console.log("Pairs of sum element: ",sumArr);
  
}

  printBackword() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.prev;
    }
    console.log(result + "null");
  }

  printForword() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

let list = new LinkedList();
// list.prepend(23);
// list.append(10);
// list.prepend(13);
// list.prepend(32);
// list.append(10);
// list.prepend(10);

list.append(1)
list.append(2)
list.append(3)

list.append(4)
list.append(9)





list.printForword();
list.printBackword();
// console.log("Befor deletion :", list.printForword());/
// 
// list.deleteAllOccurance(10)
// console.log("After deletion :", list.printForword());
// console.log("Sum of Pairsis : ",list.sumOfPair(5))
list.sumOfPair(5)



