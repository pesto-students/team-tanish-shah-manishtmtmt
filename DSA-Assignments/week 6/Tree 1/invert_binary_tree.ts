
import * as readline from 'readline';

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

function invertBinaryTree(root: TreeNode<number>): TreeNode<number> | null {
  if (root === null) return null;

  [root.left, root.right] = [root.right, root.left];

  invertBinaryTree(root.left!);
  invertBinaryTree(root.right!);

  return root;
}

function printLevels(root: TreeNode<number>): void {
  let result: (number | null)[][] = [];
  let queue: TreeNode<number>[] = [root];

  while (queue.length > 0) {
    let level: (number | null)[] = [];
    let levelSize = queue.length;

    for (let i: number = 0; i < levelSize; i++) {
      let node: TreeNode<number> = queue.shift()!;

      if (node !== null) {
        level.push(node.value);
        queue.push(node.left!);
        queue.push(node.right!);
      }
    }

    if (level.length > 0) result.push(level);
  }

  result.forEach((element: (number | null)[]) => console.log(element.join(" ")));
}

function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Enter the nodes of binary tree (space-separated): ', (input: string) => {
    const arrNodes: (number | null)[] = input.trim().split(" ").map((element: string) => element === 'null' ? null : parseInt(element));

    const root: TreeNode<number> = buildTree(arrNodes)!;

    const invertedRoot = invertBinaryTree(root);
    console.log("Inverted Tree:");
    printLevels(invertedRoot!);

    rl.close();
  })
}

main();
