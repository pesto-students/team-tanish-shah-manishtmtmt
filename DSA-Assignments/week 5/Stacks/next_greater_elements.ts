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
    const newNode: ListNode<T> = new ListNode<T>(value);
    newNode.next = this.top;
    this.top = newNode;
    return ++this.size;
  }

  pop(): T | null {
    if (!this.top) return null;
    const poppedItem: T = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedItem;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  print(): void {
    const elements: T[] = new Array(this.size);
    let current: ListNode<T> | null = this.top;
    let i: number = 0;
    while (current) {
      elements[i++] = current.value;
      current = current.next;
    }

    console.log(elements.join(" "));
  }
}

function nextGreaterElement(n: number, arr: number[]): number[] {
  const stack: Stack<number> = new Stack<number>();
  const result: number[] = new Array(n).fill(-1);

  for (let i: number = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.top && stack.top.value <= arr[i]) {
      stack.pop();
    }
    if (!stack.isEmpty()) result[i] = stack.top ? stack.top.value : -1;
    stack.push(arr[i]);
  }

  return result;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter space-separated integers: ", (input: string) => {
    const arr: number[] = input.trim().split(" ").map(Number);
    const n: number = arr.length;
    const result: number[] = nextGreaterElement(n, arr);
    console.log("Next greater elements of the array:");
    console.log(result.join(" "));
    rl.close();
  });
}

main();
  