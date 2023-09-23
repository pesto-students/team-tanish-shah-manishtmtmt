
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

function mergeTrees(node1: TreeNode<number> | null, node2: TreeNode<number> | null): TreeNode<number> | null {
  if (!node1 && !node2) return null;

  const value: number = (node1 ? node1.value : 0) + (node2 ? node2.value : 0);
  const mergedNode: TreeNode<number> = new TreeNode(value);
  mergedNode.left = mergeTrees(node1 ? node1.left : null, node2 ? node2.left : null)!;
  mergedNode.right = mergeTrees(node1 ? node1.right : null, node2 ? node2.right : null)!;

  return mergedNode;
}

function preOrderTraversal(node: TreeNode<number>): void {
  if (node) {
    console.log(node.value);
    preOrderTraversal(node.left!);
    preOrderTraversal(node.right!);
  }
}

// main program
function main() {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter the nodes of first binary tree separated by space: ', (input: string) => {
    const nodeArr1: (number | null)[] = input.trim().split(" ").map((element: string) => {
      if (element === "null") return null;
      else return parseInt(element);
    });

    const root1: TreeNode<number> = buildTree(nodeArr1)!;

    rl.question('Enter the nodes of second binary tree separated by space: ', (input: string) => {
      const nodeArr2: (number | null)[] = input.trim().split(" ").map((element: string) => element === 'null' ? null : parseInt(element));

      const root2: TreeNode<number> = buildTree(nodeArr2)!;

      const mergedRoot: TreeNode<number> = mergeTrees(root1, root2)!;

      console.log("Merged binary tree:");
      preOrderTraversal(mergedRoot);

      rl.close();
    })
  })
}

main();
