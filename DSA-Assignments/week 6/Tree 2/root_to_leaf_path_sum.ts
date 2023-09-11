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

const hasPathSum = (root: TreeNode<number>, targetSum: number): boolean => {
  if (!root || !targetSum) return false;

  targetSum -= root.value;
  if (root.left === null && root.right === null) return targetSum === 0;
  
  return hasPathSum(root.left!, targetSum) || hasPathSum(root.right!, targetSum);
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the nodes of the tree in a space-separated format: ",
    (input: string) => {
      const nodes: (number | null)[] = input
        .trim()
        .split(" ")
        .map((element: string) =>
          element === "null" ? null : parseInt(element)
        );

      const tree: TreeNode<number> = buildTree(nodes)!;

      rl.question('Enter the target sum: ', (input: string) => {
        const target: number = +input;

        const result: boolean = hasPathSum(tree, target);
        console.log(result);

        rl.close();
      })
    }
  );
};

main();