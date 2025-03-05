class Node{
  constructor(value){
    this.value = value
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.length = 0
  }

  append(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode
    }else{
      let temp = this.head

      while(temp.next){
        temp = temp.next
      }
      temp.next = newNode

    }
    this.length++
  }

  prepend(value){
    let newNode = new Node(value)
    newNode.next = this.head  // new Node points to current head
    this.head = newNode  // update head
    this.length++
  }

  // delete from the begining
  deleteAtFirst(){
    if(!this.head) return;

    this.head = this.head.next
    this.length--
  }

  pop(){
    if(!this.head) return
    if(this.head.next){
      this.head = null
    }else{
      let temp = this.head
      let prev = null

      while(temp.next){
        prev = temp
        temp = temp.next
      }
      prev.next = null
    }
    this.length--
  }
  print(){
    let temp = this.head
    let result = []
    while(temp){
      result.push(temp.value)
      temp = temp.next
    }

    console.log(result.join(" -> "));
    
  }
}

let list = new LinkedList()
list.append(20)
list.append(30)
list.append(40)
list.prepend(23)
list.deleteAtFirst()
// list.deleteAtEnd()
// console.log(list);

list.print()