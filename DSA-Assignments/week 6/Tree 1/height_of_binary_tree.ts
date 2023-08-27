
import * as readline from "readline";

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = this.right = null;
  }
}

function buildTreeFromArray(arr: (number | null)[], index: number = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = buildTreeFromArray(arr, 2 * index + 1);
  root.right = buildTreeFromArray(arr, 2 * index + 2);

  return root;
}

function heightOfBinaryTree(root: TreeNode<any>) {
  if (root === null) return 0;

  const leftHeight = heightOfBinaryTree(root.left!);
  const rightHeight = heightOfBinaryTree(root.right!);

  return Math.max(leftHeight + rightHeight) + 1;
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the elements of the binary tree, space-separated: ",
    (input: string) => {
      const nodes: (number | null)[] = input
        .trim()
        .split(" ")
        .map((element: string) => {
          if (element === "null") return null;
          return +element;
        });

      const root: TreeNode<number | null> | null = buildTreeFromArray(nodes!);

      const treeHeight = heightOfBinaryTree(root!);
      console.log("Height of the binary tree: ", treeHeight);

      rl.close();
    }
  );
}

main();
