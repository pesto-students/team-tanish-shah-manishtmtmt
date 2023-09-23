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

function mergeLinkedLists(list1, list2) {
  let current1 = list1.head;
  let current2 = list2.head;

  let mergedList = new LinkedList();

  while (current1 && current2) {
    if (current1.value < current2.value) {
      mergedList.append(current1.value);
      current1 = current1.next;
    } else {
      mergedList.append(current2.value);
      current2 = current2.next;
    }
  }

  while (current1) {
    mergedList.append(current1.value);
    current1 = current1.next;
  }

  while (current2) {
    mergedList.append(current2.value);
    current2 = current2.next;
  }

  return mergedList;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the spaced-separated integers (e.g., 1 3 5, 2 4 6): ",
    (input) => {
      input = input.trim().split(", ");
      let list1 = input[0].trim().split(" ").map(Number);
      let list2 = input[1].trim().split(" ").map(Number);

      const linkedList1 = new LinkedList();
      const linkedList2 = new LinkedList();

      list1.forEach((element) => linkedList1.append(element));
      list2.forEach((element) => linkedList2.append(element));

      const mergedList = mergeLinkedLists(linkedList1, linkedList2);
      mergedList.print();

      readline.close();
    }
  );
}

main();

// Time complexity: O(n)
// Space complexity: O(n)