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

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
    console.log("Length of linkedlist is ", this.length);
  }
}

const list = new LinkedList();
list.append(32);
list.append(2);
list.append(1);
list.append(2);
list.prepend(6)
list.print();
