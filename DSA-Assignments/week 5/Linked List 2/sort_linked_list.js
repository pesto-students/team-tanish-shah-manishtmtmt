const ZERO = 0;
const ONE = 1;
const TWO = 2;

class Node {
  constructor(value, next = null) 
  {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
    } else {
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    const elements = [];
    let current = this.head;
    while(current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements);
  }
}

function sortLinkedList(head) {
  const N = 3;

  const num = new Array(N).fill(0);

  let current = head;
  while(current) {
    if(current.value === ZERO) num[ZERO]++;
    else if (current.value === ONE) num[ONE]++;
    else num[TWO]++;
    current = current.next;
  }

  current = head;
  let i = ZERO;
  while(current) {
    for (let j = 0; j < num[i]; j++) {
      current.value = i;
      current = current.next;
    }
    i++;
  }

  return head;
}

// main program
function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const linkedList = new LinkedList();

  rl.question('Enter elements (space-separated) to insert into the linked list: ', input => {
    input = input.trim().split(" ");
    input.forEach(element => linkedList.append(parseInt(element)));
    linkedList.print();
    const sortedList = sortLinkedList(linkedList.head)
    linkedList.head = sortedList;
    console.log("Sorted linked list:")
    linkedList.print();
    rl.close();
  })
}

main();