class Node {
  constructor(data) {
    this.data = data; // Stores the data for the node
    this.next = null; // Points to the next node (initially null)
  }
}

class LinkedList {
  constructor() {
    this.head = null; // The first node in the list (initially null)
  }

  addFirst(data) {
    const newNode = new Node(data); // Create a new node
    newNode.next = this.head; // Point the new node to the current head
    this.head = newNode; // Update the head to the new node
  }

  addLast(data) {
    const newNode = new Node(data); // Create a new node

    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set the new node as the head
      return;
    }

    let current = this.head; // Start from the head
    while (current.next) {
      // Traverse to the last node
      current = current.next;
    }
    current.next = newNode; // Add the new node at the end
  }

  size() {
    let count = 0;
    let current = this.head; // Start from the head
    while (current) {
      // Traverse the list
      count++;
      current = current.next;
    }
    return count; // Return the total number of nodes
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      // Check for invalid index
      console.error("Invalid index");
      return;
    }

    const newNode = new Node(data); // Create a new node

    if (index === 0) {
      // If adding at the beginning
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head; // Start from the head
    for (let i = 0; i < index - 1; i++) {
      // Traverse to the node before the index
      current = current.next;
    }

    newNode.next = current.next; // Insert the new node
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      // If the list is empty
      return;
    }
    this.head = this.head.next; // Remove the head by pointing to the next node
  }

  removeLast() {
    if (!this.head) {
      // If the list is empty
      return;
    }

    let current = this.head; // Start from the head
    while (current.next.next) {
      // Traverse to the second-last node
      current = current.next;
    }
    current.next = null; // Remove the last node
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      // Check for invalid index
      console.error("Invalid index");
      return;
    }

    if (index === 0) {
      // If removing the head
      this.head = this.head.next;
      return;
    }

    let current = this.head; // Start from the head
    for (let i = 0; i < index - 1; i++) {
      // Traverse to the node before the index
      current = current.next;
    }

    if (current.next) {
      // Remove the node at the specified index
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head; // Start from the head
    while (current) {
      // Traverse the list
      console.log(current.data); // Print the data of each node
      current = current.next;
    }
  }

  sum() {
    let sum = 0;
    let current = this.head; // Start from the head
    while (current) {
      // Traverse the list
      sum += current.data; // Add the data of each node
      current = current.next;
    }
    return sum; // Return the total sum
  }

  // reverse linkedlist

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const linkedList = new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(4);
linkedList.addFirst(3);
linkedList.addFirst(2);
linkedList.addLast(6);
linkedList.addAt(5, 1);
linkedList.print();

console.log("Sum of list is", linkedList.sum());
console.log("reverese linkedlist ", linkedList.reverse());
// linkedList.print()
