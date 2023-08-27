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

const areIdentical = (
  root1: TreeNode<number>,
  root2: TreeNode<number>
): boolean => {
  if (!root1 && !root2) return true;

  if (!root1 || !root2) return false;

  return (
    root1.value === root2.value &&
    areIdentical(root1.left!, root2.left!) &&
    areIdentical(root1.right!, root2.right!)
  );
};

const isSubTree = (
  tree1: TreeNode<number>,
  tree2: TreeNode<number>
): boolean => {
  if (!tree2) return true;

  if (!tree1) return false;

  if (areIdentical(tree1, tree2)) return true;

  return isSubTree(tree1.left!, tree2) || isSubTree(tree1.right!, tree2);
};

// main program
const main = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the nodes of first binary tree: ", (input: string) => {
    const nodesArr1: (number | null)[] = input
      .trim()
      .split(" ")
      .map((element: string) =>
        element === "null" ? null : parseInt(element)
      );

    const tree1: TreeNode<number> = buildTree(nodesArr1)!;

    rl.question(
      "Enter the nodes of the second binary tree: ",
      (input: string) => {
        const nodesArr2: (number | null)[] = input
          .trim()
          .split(" ")
          .map((element: string) =>
            element === "null" ? null : parseInt(element)
          );

        const tree2: TreeNode<number> = buildTree(nodesArr2)!;

        const result: boolean = isSubTree(tree1, tree2);

        console.log(
          `The second tree is${
            result ? "" : " not"
          } a subtree of the first tree.`
        );

        rl.close();
      }
    );
  });
};

main();
