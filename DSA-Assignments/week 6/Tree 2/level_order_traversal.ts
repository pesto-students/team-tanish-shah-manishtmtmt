import * as readline from "readline";

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const buildTree = (nodes: (number | null)[]): TreeNode<number> | null => {
  if (nodes.length === 0) return null;

  const root: TreeNode<number> = new TreeNode<number>(nodes[0]!);
  const queue: TreeNode<number>[] = [root];
  let i = 1;

  while (i < nodes.length) {
    const currentNode: TreeNode<number> = queue.shift()!;
    if (nodes[i] !== null) {
      currentNode.left = new TreeNode<number>(nodes[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if (i < nodes.length && nodes[i] !== null) {
      currentNode.right = new TreeNode<number>(nodes[i]!);
      queue.push(currentNode.right);
    }
    i++;
  }
  return root;
};

const printLevels = (root: TreeNode<number>): void => {
  const result: number[][] = [];
  const queue: TreeNode<number>[] = [root];

  while (queue.length > 0) {
    const currentLevel: number[] = [];
    const levelSize: number = queue.length;

    for (let i: number = 0; i < levelSize; i++) {
      const node: TreeNode<number> = queue.shift()!;

      if (node !== null) {
        currentLevel.push(node.value);
        queue.push(node.left!);
        queue.push(node.right!);
      }
    }

    if (currentLevel.length > 0) result.push(currentLevel);
  }

  result.forEach((element: number[], index: number) =>
    console.log(`Level ${index + 1}: ${element.join(" ")}`)
  );
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the nodes of binary tree (space-separated): ",
    (input: string) => {
      const nodes: (number | null)[] = input
        .trim()
        .split(" ")
        .map((element: string) =>
          element === "-1" ? null : parseInt(element)
        );

      const tree: TreeNode<number> = buildTree(nodes)!;

      printLevels(tree);

      rl.close();
    }
  );
};

main();
