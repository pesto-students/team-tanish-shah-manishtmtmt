class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.front === null) return null;
    let temp = this.front;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return temp.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function rearrangeQueue(arr) {
  const evenQueue = new Queue();
  const oddQueue = new Queue();

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) evenQueue.enqueue(arr[i]);
    else oddQueue.enqueue(arr[i])
  }

  let result = new Array(evenQueue.size + oddQueue.size).fill(0);
  let i = 0;

  while(!evenQueue.isEmpty()) {
    result[i++] = evenQueue.dequeue();
  }

  while(!oddQueue.isEmpty()) {
    result[i++] = oddQueue.dequeue();
  }

  return result;
}

// main program
function main() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter the elements of the queue separated by spaces: ", input => {
    input = input.trim().split(" ").map(Number);
    const result = rearrangeQueue(input);
    console.log("Rearranged array:");
    console.log(result);
    rl.close();
  })
}

main();