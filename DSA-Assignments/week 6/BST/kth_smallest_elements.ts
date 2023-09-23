import * as readline from "readline";

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
    const newNode: TreeNode<T> = new TreeNode<T>(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value <= node.value) {
      if (node.left === null) {
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

  inOrderTraversal(
    root: TreeNode<T> | null = this.root,
    result: T[] = []
  ): T[] {
    if (root !== null) {
      this.inOrderTraversal(root?.left, result);
      result.push(root?.value!);
      this.inOrderTraversal(root?.right, result);
    }

    return result;
  }
}

function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the elements of binary search tree space-separated: ",
    (input: string) => {
      const arr: number[] = input.trim().split(" ").map(Number);
      const bst: BST<number> = new BST<number>();
      arr.forEach((element: number) => bst.insert(element));
      console.log(bst);

      rl.question("Enter the value of K: ", (input: string) => {
        let result: number[] = bst.inOrderTraversal();
        if (result.length < +input) {
          console.log(-1);
        } else {
          console.log(result[+input - 1]);
        }

        rl.close();
      });
    }
  );
}

main();
