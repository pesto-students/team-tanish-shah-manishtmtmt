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

  while(i < nodes.length) {
    const currentNode: TreeNode<number> = queue.shift()!;
    if(nodes[i] !== null) {
      currentNode.left = new TreeNode(nodes[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if(i < nodes.length && nodes[i] !== null) {
      currentNode.right = new TreeNode(nodes[i]!);
      queue.push(currentNode.right)
    }
    i++;
  }

  return root;
}

function countLeafNodes(root: TreeNode<number>): number {
  if (!root) return 0;

  if(!root.left && !root.right) return 1;

  return countLeafNodes(root.left!) + countLeafNodes(root.right!);
}

// main program
function main() {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter the nodes of binary tree separated by space: ', (input: string) => {
    const nodeArr: (number | null)[] = input.trim().split(" ").map((element: string) => {
      if (element === "null") return null;
      else return parseInt(element);
    });

    const root: TreeNode<number> = buildTree(nodeArr)!;

    const leafNodeCount = countLeafNodes(root);

    console.log('Number of leaf nodes:', leafNodeCount);

    rl.close();
  })
}

main();
