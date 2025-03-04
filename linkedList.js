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
// console.log(list);

list.print()