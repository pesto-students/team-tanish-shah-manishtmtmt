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
}

// main program
function main() {
  const readline = require("readline");
  const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const list1 = new LinkedList();
  const list2 = new LinkedList();

  line.question(
    "Enter elements (space-separated) to insert into the first linked list: ",
    (input) => {
      input = input.trim().split(" ");
      input.forEach((element) => list1.append(parseInt(element)));

      console.log("Linked list1 elements:");
      list1.print();

      line.question(
        "Enter elements (space-separated) to insert into the first linked list: ",
        (input) => {
          input = input.trim().split(" ");
          input.forEach((element) => list2.append(parseInt(element)));
          console.log("Linked list2 elements:");
          list2.print();
          line.close();
        }
      );
    }
  );
}

main();
