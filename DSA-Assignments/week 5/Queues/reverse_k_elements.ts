import * as readline from "readline";

// creating a ListNode class to create node
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }
}

// creating a Queue class
class Queue<T> {
  front: ListNode<T> | null;
  rear: ListNode<T> | null;
  size: number;
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // enqueue will add element to the end of the queue and will return size of the queue
  enqueue(value: T): number {
    const node: ListNode<T> = new ListNode(value);
    if (!this.front || !this.rear) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return ++this.size;
  }

  // dequeue will remove element from front and return the removed element
  dequeue(): T | null {
    if (this.front === null) return null;
    let dequeuedItem: T = this.front.value;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return dequeuedItem;
  }

  // isEmpty checks wheather queue is either empty or not and return a boolean value
  isEmpty(): boolean {
    return this.size === 0;
  }

  // print will print the queue on the console
  print(): void {
    let elements: T[] = new Array(this.size);
    let current: ListNode<T> | null = this.front;
    let i: number = 0;
    while (current) {
      elements[i++] = current.value;
      current = current.next;
    }

    console.log(elements.join(" "));
  }
}

// creating the Stack class
class Stack<T> {
  top: ListNode<T> | null;
  size: number;

  constructor() {
    this.top = null;
    this.size = 0;
  }

  // push will add element to the end of the stack and return the size of the stack
  push(value: T): number {
    const node: ListNode<T> = new ListNode(value);
    node.next = this.top;
    this.top = node;
    return ++this.size;
  }

  // pop will remove the last element from the stack and return the removed element
  pop(): T | null {
    if (this.top === null) return null;
    const poppedItem: T = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedItem;
  }

  // isEmpty will check wheather the stack is empty or not
  isEmpty(): boolean {
    return this.size === 0;
  }

  // print will print the stack on console
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

// reverseKElements will return a queue with k reversed elements
function reverseKElements(queue: Queue<number>, k: number): Queue<number> {
  // creating a empty stack to store first k element of queue
  const stack: Stack<number> = new Stack();

  // storing first k elements to stack
  for (let i: number = 0; i < k; i++) {
    stack.push(queue.dequeue()!);
  }

  // adding stack's elements back to queue at end
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop()!);
  }

  // adding queue size - k elements to end of the queue
  for (let i: number = 0; i < queue.size - k; i++) {
    queue.enqueue(queue.dequeue()!);
  }

  return queue;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the space-separated integers representing the elements of the queue: ",
    (input: string) => {
      const array: number[] = input.trim().split(" ").map(Number);

      const queue: Queue<number> = new Queue<number>();
      array.forEach((element: number) => queue.enqueue(element));
      queue.print();

      rl.question("Enter the single integer K: ", (input: string) => {
        const k: number = Number(input);
        const reversedQueue: Queue<number> = reverseKElements(queue, k);
        console.log(`Queue after reversing ${k} elements:`);
        reversedQueue.print();
        rl.close();
      });
    }
  );
}

main();
