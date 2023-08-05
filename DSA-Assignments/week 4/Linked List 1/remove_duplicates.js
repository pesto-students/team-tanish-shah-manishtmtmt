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

function removeDuplicates(list) {
  const hashSet = new Set();
  let current = list.head;

  let modifiedList = new LinkedList();

  while(current) {
    if (!hashSet.has(current.value)) {
      hashSet.add(current.value);
      modifiedList.append(current.value);
    }
    current = current.next;
  }

  return modifiedList;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter spaced-separated integers: ", (input) => {
    input = input.trim().split(" ").map(Number);
    const linkedList = new LinkedList();

    input.forEach((element) => linkedList.append(element));

    const result = removeDuplicates(linkedList);
    result.print();
    readline.close();
  });
}

main();

// Time complexity: O(n)
// Space complexity: O(n)