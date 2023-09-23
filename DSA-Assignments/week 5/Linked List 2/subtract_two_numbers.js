class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkeList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function printLinkedList(head) {
  const elements = [];
  let current = head;
  while (current) {
    elements.push(current.value);
    current = current.next;
  }
  console.log(elements);
}

// main program
function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const list1 = new LinkeList();
  const list2 = new LinkeList();

  rl.question('Enter the elements (space-separated) of the first linked list: ', input => {
    input = input.trim().split(" ");
    input.forEach(element => list1.append(parseInt(element)));
    printLinkedList(list1.head);

    rl.question('Enter the elements (space-separated) of the second linked list: ', input => {
      input = input.trim().split(" ");
      input.forEach(element => list2.append(parseInt(element)));
      printLinkedList(list2.head);

      rl.close();
    })
  })
} 

main();