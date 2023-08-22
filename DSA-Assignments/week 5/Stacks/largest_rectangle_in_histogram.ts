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

function maxAreaOfHistogram(histogram: number[]): number {
  const stack: Stack<number> = new Stack<number>();
  let maxArea: number = 0;

  for (let i: number = 0; i <= histogram.length; i++) {
    while (
      !stack.isEmpty() &&
      (i === histogram.length ||
        (stack.top && histogram[i] <= histogram[stack.top.value]))
    ) {
      const height: number = histogram[stack.pop()!];
      const width: number | null = stack.isEmpty()
        ? i
        : stack.top && i - stack.top.value - 1;
      maxArea = Math.max(maxArea, height * width!);
    }
    stack.push(i);
  }

  return maxArea;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter space-separated integers representing the histogram: ",
    (input: string) => {
      const histogram: number[] = input.trim().split(" ").map(Number);
      const area: number = maxAreaOfHistogram(histogram);
      console.log("Largest area of the histogram:");
      console.log(area);
      rl.close();
    }
  );
}

main();
