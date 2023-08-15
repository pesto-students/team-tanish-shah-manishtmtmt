class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return ++this.size;
  }

  pop() {
    if (this.isEmpty()) return null;
    const poppedItem = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedItem;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function isValidParenthese(str) {
  if (str.length === 0 || str.length % 2 !== 0) return false;

  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }

    if (
      (str[i] === ")" && stack.peek() === "(") ||
      (str[i] === "}" && stack.peek() === "{") ||
      (str[i] === "]" && stack.peek() === "[")
    ) {
      stack.pop();
    }
  }

  return stack.isEmpty();
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter a string containing parentheses: ", (input) => {
    const result = isValidParenthese(input);
    console.log("result:", result);
    readline.close();
  });
}

main();