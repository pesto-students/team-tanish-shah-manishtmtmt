import * as readline from "readline";

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST<T> {
  root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(data: T): void {
    const newNode: TreeNode<T> = new TreeNode<T>(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.data <= root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

function checkIdenticalTrees(
  root1: TreeNode<number> | null,
  root2: TreeNode<number> | null
): boolean {
  if (root1 === null && root2 === null) return true;
  else if (root1 === null || root2 === null) return false;
  else if (root1.data !== root2.data) return false;

  return (
    checkIdenticalTrees(root1.left, root2.left) &&
    checkIdenticalTrees(root1.right, root2.right)
  );
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the node the first binary search tree (space-separated): ",
    (input: string) => {
      const arr: number[] = input.trim().split(" ").map(Number);
      const bst1: BST<number> = new BST<number>();
      arr.forEach((element: number) => bst1.insert(element));
      console.log(bst1);

      rl.question(
        "Enter the node the second binary search tree (space-separated): ",
        (input: string) => {
          const arr: number[] = input.trim().split(" ").map(Number);
          const bst2: BST<number> = new BST<number>();
          arr.forEach((element: number) => bst2.insert(element));
          console.log(bst2);

          const result: boolean = checkIdenticalTrees(bst1.root, bst2.root);

          console.log(
            `The two binary trees are${result ? "" : " not"} identical.`
          );
          rl.close();
        }
      );
    }
  );
}

main();
