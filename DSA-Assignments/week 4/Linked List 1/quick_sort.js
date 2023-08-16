class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
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
      while(current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let elements = [];
    let current = this.head;
    while(current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements);
  }
}

function quickSort(head) {
  const tail = getTail(head);
  return quickSortUtil(head, tail);
}

function getTail(head) {
  let current = head;
  while(current !== null && current.next !== null) {
    current = current.next;
  }
  return current;
}

function quickSortUtil(start, end) {
  if(!start || start === end) return start;

  const pivotPrev = partition(start, end);
  quickSortUtil(start, pivotPrev);

  if(pivotPrev !== null && pivotPrev === start) {
    quickSortUtil(pivotPrev.next, end)
  } else if(pivotPrev !== null && pivotPrev.next !== null) {
    quickSortUtil(pivotPrev.next.next, end)
  }

  return start;
}

function partition(start, end) {
  if(start === null || end === null || start === end) return start;

  let pivotPrev = start;
  let current = start;
  const pivot = end.value;

  while(start !== end) {
    if (start.value < pivot) {
      pivotPrev = current;
      const temp = current.value;
      current.value = start.value;
      start.value = temp;
      current = current.next;
    }
    start = start.next;
  }

  const temp = current.value;
  current.value = pivot;
  end.value = temp;

  return pivotPrev;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Enter the array representing a linked list: ', input => {
    input = input.trim().split(" ").map(Number);
    const linkedList = new LinkedList();
    
    input.forEach(item => linkedList.append(item));
    const result = quickSort(linkedList.head);
    linkedList.head = result;
    linkedList.print();
    readline.close();
  })
}

main();