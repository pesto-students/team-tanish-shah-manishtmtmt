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
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
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
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  const reversedLinkedList = new LinkedList();
  reversedLinkedList.head = prev;
  return reversedLinkedList;
}

function reverseEveryKNodes(linkedList, k) {
  if (!linkedList.head || k <= 1) return linkedList;

  const result = new LinkedList();
  let current = linkedList.head;

  while (current) {
    let count = 0;
    let tail = current;

    while (current && count < k) {
      current = current.next;
      count++;
    }

    if (count === k) {
      const dummy = new LinkedList();
      for (let i = 0; i < count; i++) {
        dummy.append(tail.value);
        tail = tail.next;
      }
      const reversedList = reverseLinkedList(dummy.head);
      let curr = reversedList.head;
      while (curr) {
        result.append(curr.value);
        curr = curr.next;
      }
    } else {
      for (let i = 0; i < count; i++) {
        result.append(tail.value);
        tail = tail.next;
      }
    }
  }

  return result;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the spaced-separated integers and a positive integer K (comma-separted) (e.g., 1 2 3 4 5 6 7 8, 3): ",
    (input) => {
      input = input.trim().split(", ");
      const arr = input[0].trim().split(" ").map(Number);
      const k = +input[1];

      const linkedList = new LinkedList();

      arr.forEach((element) => linkedList.append(element));
      const reversedLinkedList = reverseEveryKNodes(linkedList, k);

      reversedLinkedList.print();

      readline.close();
    }
  );
}

main();
