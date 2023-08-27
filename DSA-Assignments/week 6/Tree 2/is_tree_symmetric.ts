
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

function buildTree(nodes: (number | null)[]): TreeNode<number> | null {
  if (nodes.length === 0) return null;

  const root: TreeNode<number> = new TreeNode(nodes[0]!);
  const queue: TreeNode<number>[] = [root];
  let i = 1;

  while (i < nodes.length) {
    const currentNode: TreeNode<number> = queue.shift()!;
    if (nodes[i] !== null) {
      currentNode.left = new TreeNode(nodes[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if (i < nodes.length && nodes[i] !== null) {
      currentNode.right = new TreeNode(nodes[i]!);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}

function isSymmetric(root: TreeNode<number> | null): boolean {
  if (!root) return true;

  const isMirror = (node1: TreeNode<number> | null, node2: TreeNode<number> | null): boolean => {
    if (!node1 && !node2) return true;

    if (!node1 || !node2) return false;

    return (
      node1.value === node2.value &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    )
  }

  return isMirror(root.left, root.right);
}

// main program
function main() {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter the nodes of first binary tree separated by space: ', (input: string) => {
    const nodeArr: (number | null)[] = input.trim().split(" ").map((element: string) => element === 'null' ? null : parseInt(element));

    const root: TreeNode<number> = buildTree(nodeArr)!;

    console.log(`The binary tree is${isSymmetric(root) ? '' : ' not'} symmetric.`);

    rl.close();
  })
}

main();
