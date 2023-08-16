class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let elements = [];
    let current = this.head;
    while(current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join("->"));
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while(current) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    this.head = prev;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  isPalindrome() {
    if (!this.head || !this.head.next) {
      return true;
    }

    const mid = this.findMiddle();
    const secondHalf = new LinkedList();
    let current = mid;
    while(current) {
      secondHalf.append(current.value);
      current = current.next;
    }

    secondHalf.reverse();

    let firstHalf = this.head;
    current = secondHalf.head;

    while(current) {
      if (firstHalf.value !== current.value) return false;

      firstHalf = firstHalf.next;
      current = current.next;
    }

    return true;
  }
}

// main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Enter the spaced-separated integers representing the elements of an array: ', input => {
    input = input.trim().split(" ").map(Number);
    const linkedList = new LinkedList();
    input.forEach(el => linkedList.append(el));
    const result = linkedList.isPalindrome();
    console.log("Is linked list palindrome:", result);
    readline.close();
  })
}

main();

// Time complexity: O(N)
// Space complexity: O(N)