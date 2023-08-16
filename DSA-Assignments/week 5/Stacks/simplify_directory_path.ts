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

function getSimplifiedPath(path: string[]): string {
  const stack: Stack<string> = new Stack<string>();

  for (let i: number = 0; i < path.length; i++) {
    if (path[i] === "." || path[i] === "") continue;
    else if (path[i] === "..") {
      if (!stack.isEmpty()) {
        stack.pop();
      }
    } else {
      stack.push(path[i]);
    }
  }

  let simplifiedPath: string = "";
  while (!stack.isEmpty()) {
    simplifiedPath += "/" + stack.pop();
  }
  return simplifiedPath;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter an absolute path: ", (input: string) => {
    const absPath: string[] = input.trim().split("/");
    const simplifiedPath: string = getSimplifiedPath(absPath);
    console.log("Simplified path:");
    console.log(simplifiedPath);
    rl.close();
  });
}

main();
