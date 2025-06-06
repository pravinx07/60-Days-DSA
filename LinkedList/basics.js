/*
Linkedlist is a linear data structure where data is stored in non contigiuos memory and have node in node ther are two parts 
one for data and second for address of next element is efficiant to traversing the data 

 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if list is empty
      this.head = newNode;
    } else {
      let temp = this.head; // if list not empty

      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return 1;
      }
      current = current.next;
    }
    return -1;
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.length--;
    }
  }

  insertAt(index, value) {
    if(index < 0 || index > this.length) {
      console.log("Invalid Index ");
      return
    }
    let newNode = new Node(value)
    let current = this.head
    let previous = null
    let count = 0;

    if(index === 0){
      newNode.next = this.head
      this.head = newNode
    }else{
      while(count < index){
        previous = current
        current = current.next
        count++
      }
      newNode.next = current
      previous.next = newNode
    }

    this.length++

  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
      // console.log(arr);
    }
    // console.log(arr);
    return arr;
  }

  isAEmpty() {
    if (!this.length) return true;
    return false;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
    // console.log("Length of linkedlist is ", this.length);
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(6);
list.append(32);
list.append(2);

// list.delete(21)
// console.log(list.find(21))
list.insertAt(3,9);
list.print();
// console.log(list.find(6))
// console.log(list.toArray())
// console.log("is Empty", list.isAEmpty());

