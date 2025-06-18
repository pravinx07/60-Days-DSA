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
list.prepend(23);
list.append(10);
list.prepend(13);
list.prepend(32);
list.append(10);
list.prepend(10);





list.printForword();
list.printBackword();
// console.log("Befor deletion :", list.printForword());/
// 
list.deleteAllOccurance(10)
// console.log("After deletion :", list.printForword());
list.printForword();
list.printBackword();


