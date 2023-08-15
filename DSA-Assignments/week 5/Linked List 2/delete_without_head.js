class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements);
  }

  deleteNode(value) {
    if(!this.head) return;
    
    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while(current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
    console.log('Element not found in the linked list.')
  }
}

// main program
function main() {
  const readline = require("readline");
  const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const list = new LinkedList();

  line.question("Enter elements (space-separated) to insert into the linked list: ", input => {
    input = input.trim().split(" ");
    input.forEach(element => list.append(parseInt(element)));

    console.log('Linked list elements:');
    list.print();

    line.question('Enter the value of the element to be deleted: ', value => {
      list.deleteNode(parseInt(value));
      console.log('Linked list after deletion:');
      list.print();
      line.close();
    })
  })
}

main();
