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

const findLowestCommonAncestor = (
  root: TreeNode<number>,
  firstNode: number,
  secondNode: number
): number | null => {
  if (root === null) return null;

  if (root.value === firstNode || root.value === secondNode) return root.value;

  const left: number = findLowestCommonAncestor(
    root.left!,
    firstNode,
    secondNode
  )!;
  const right: number = findLowestCommonAncestor(
    root.right!,
    firstNode,
    secondNode
  )!;

  return left !== null && right !== null
    ? root.value
    : left !== null
    ? left
    : right;
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the value of each node space-separated in level order: ",
    (input: string) => {
      const nodes: (number | null)[] = input
        .trim()
        .split(" ")
        .map((element: string) =>
          element === "null" ? null : parseInt(element)
        );

      const tree: TreeNode<number> = buildTree(nodes)!;

      rl.question(
        "Enter the first and second node space-separated: ",
        (input: string) => {
          const [firstNode, secondNode] = input.trim().split(" ").map(Number);

          const lowestCommonAncestor: number = findLowestCommonAncestor(
            tree,
            firstNode,
            secondNode
          )!;

          console.log(
            `The lowest common ancestor of nodes ${firstNode} and ${secondNode} is ${lowestCommonAncestor}.`
          );

          rl.close();
        }
      );
    }
  );
};

main();
