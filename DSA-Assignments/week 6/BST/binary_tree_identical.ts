import * as readline from 'readline';

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode: TreeNode<T> | null = new TreeNode<T>(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value <= node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

// main program
function main() {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const bst1: BST<number> = new BST<number>();
  const bst2: BST<number> = new BST<number>();

  rl.question('Enter the elements space-separated representing the node of first tree: ', (input: string) => {
    const arr1: number[] = input.trim().split(" ").map(Number);
    arr1.forEach((element: number) => bst1.insert(element));

    rl.question('Enter the elements space-separated representing the node of the second tree: ', (input: string) => {
      const arr2: number[] = input.trim().split(" ").map(Number);
      arr2.forEach((element: number) => bst2.insert(element));

      rl.close();
    })
  })
}

main();