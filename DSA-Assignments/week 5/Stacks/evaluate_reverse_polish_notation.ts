import * as readline from "readline";

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack<T> {
  top: ListNode<T> | null;
  size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value: T): number {
    const node: ListNode<T> = new ListNode(value);
    node.next = this.top;
    this.top = node;
    return ++this.size;
  }

  pop(): T | null {
    if (this.top === null) return null;
    const poppedItem: T = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedItem;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  print(): void {
    let elements: T[] = new Array(this.size);
    let current: ListNode<T> | null = this.top;
    let i: number = 0;
    while (current) {
      elements[i++] = current.value;
      current = current.next;
    }
    console.log(elements.reverse().join(" "));
  }
}

function evaluateRPN(array: string[]): Stack<string> {
  const stack: Stack<string> = new Stack<string>();

  for (let i: number = 0; i < array.length; i++) {
    if (!isNaN(Number(array[i]))) {
      stack.push(array[i]);
    } else {
      let firstNumber: string = stack.pop()!;
      let secondNumber: string = stack.pop()!;

      const output: string = eval(`${firstNumber} ${array[i]} ${secondNumber}`);
      stack.push(output);
    }
  }

  return stack;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter an array of tokens in RPN format (space-separated): ",
    (input: string) => {
      const array: string[] = input.trim().split(" ");
      console.log(array);
      const result: Stack<string> = evaluateRPN(array);
      console.log("Output:");
      result.print();
      rl.close();
    }
  );
}

main();
