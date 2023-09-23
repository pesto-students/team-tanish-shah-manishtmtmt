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
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  rearrangeZigZag() {
    let current = this.head;
    let isEvenIdx = true;

    while (current && current.next) {
      if (isEvenIdx && current.value > current.next.value) {
        const temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
      } else if (!isEvenIdx && current.value < current.next.value) {
        const temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
      }

      current = current.next;
      isEvenIdx = !isEvenIdx;
    }
  }

  toString() {
    let result = "";
    let current = this.head;

    while(current) {
      result += current.value + " ";
      current = current.next;
    }

    console.log(result.trim());
  }
}

// main program
function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const list = new LinkeList();

  rl.question(
    "Enter the elements (space-separated) for the linked list: ",
    (input) => {
      input = input.trim().split(" ");
      input.forEach(element => list.append(parseInt(element)));
      list.toString();

      list.rearrangeZigZag();
      console.log('Rearranged linked list in zig-zag fashion:');
      list.toString();
      rl.close();
    }
  );
}

main();
