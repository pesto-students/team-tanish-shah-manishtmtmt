class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue<T> {
  front: ListNode<T> | null;
  rear: ListNode<T> | null;
  size: number;
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value: T): number {
    const node = new ListNode(value);
    if (!this.rear) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return ++this.size;
  }

  dequeue(): T | null {
    if (this.front === null) return null;
    let temp = this.front;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return temp.value;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  print(): void {
    let elements: T[] = [];
    let current = this.front;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" "));
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
    const newNode = new ListNode(value);
    newNode.next = this.top;
    this.top = newNode;
    return ++this.size;
  }

  pop(): T | null {
    if (this.top === null) return null;
    const poppedItem = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedItem;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

function reverseQueue(queue: Queue<number>): Queue<number> {
  const stack: Stack<number> = new Stack();

  while(!queue.isEmpty()) {
    stack.push(queue.dequeue()!);
  }

  while(!stack.isEmpty()) {
    queue.enqueue(stack.pop()!);
  }

  return queue;
}

// main program
function main() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter space-separated integers representing the elements of the queue: ",
    (input: string) => {
      const arr = input.trim().split(" ").map(Number);
      const queue: Queue<number> = new Queue();
      arr.forEach((element: number) => queue.enqueue(element));
      const reversedQueue = reverseQueue(queue);
      console.log('Reversed Queue:');
      reversedQueue.print();
      rl.close();
    }
  );
}

main();
