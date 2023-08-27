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
    this.root = this._insertNode(this.root!, data);
  }

  _insertNode(node: TreeNode<T>, data: T): TreeNode<T> {
    if (node === null) return new TreeNode<T>(data);

    if (data < node.data) {
      node.left = this._insertNode(node.left!, data);
    } else if (data > node.data) {
      node.right = this._insertNode(node.right!, data);
    }

    return node;
  }

  inOrder(node: TreeNode<T> | null = this.root): void {
    if (node !== null) {
      this.inOrder(node?.left!);
      console.log(node?.data);
      this.inOrder(node?.right!);
    }
  }
}

let maxSum = Number.NEGATIVE_INFINITY;

function maximumPathSum(root: TreeNode<number> | null): number {
  maxSum = Number.NEGATIVE_INFINITY;
  findMaxPathSum(root);
  return maxSum;
}

function findMaxPathSum(node: TreeNode<number> | null): number {
  if (node === null) return 0;

  const leftSum: number = Math.max(findMaxPathSum(node.left)!, 0);
  const rightSum: number = Math.max(findMaxPathSum(node.right)!, 0);

  const nodeSum = node.data + leftSum + rightSum;
  maxSum = Math.max(maxSum, nodeSum);

  return node.data + Math.max(leftSum + rightSum);
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the elements of the binary tree (space-separated): ",
    (input: string) => {
      const arr: number[] = input.trim().split(" ").map(Number);
      const bst: BST<number> = new BST<number>();
      arr.forEach((element: number) => bst.insert(element));
      const result: number = maximumPathSum(bst.root);
      console.log(result);
      rl.close();
    }
  );
}

main();
