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
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode 
    }
    this.length++
  }

  prePend(value){
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  printList(){
    let current = this.head
    let result = ''

    while(current){
        result += current.value + " -> "
        current = current.next
    }
    console.log("LinkedList: ",result);
    
  }

  findMiddle(){
    let temp = this.head
    let cnt = 0
    while(temp !== null){
        cnt ++
        temp = temp.next
    }

    let midNode = Math.floor(cnt/2) + 1

    temp = this.head
    while(temp !== null){
        midNode -= 1
        if(midNode == 0) break
        temp = temp.next
    }
    return temp
  }
}


let list = new LinkedList()
list.append(12)
list.append(10)
list.append(14)
list.append(33)
list.prePend(13)
console.log("middleNode",list.findMiddle())
list.printList()
