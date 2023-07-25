function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapSort(arr) {
  const N = arr.length;

  // build heap (rearrange array)
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(arr, N, i);
  }

  // one by one extract an element from heap
  for (let i = N - 1; i >= 0; i--) {
    swap(arr, 0, i);

    // call the heapify on the reduced heap
    heapify(arr, i, 0)
  }
}

function heapify(arr, N, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // check if left child is smaller than root
  if (left < N && arr[left].length < arr[smallest].length) {
    smallest = left;
  }

  // check if right child is smaller than root
  if (right < N && arr[right].length < arr[smallest].length) {
    smallest = right;
  }

  // if smallest is not root
  if (smallest != i) {
    swap(arr, i, smallest);

    // recursively heapify the affected sub-tree
    heapify(arr, N, smallest);
  }
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the strings as a comma-separated string: ",
    (input) => {
      input = input.trim().split(",");

      heapSort(input);

      console.log("Sorted array:", input.join(" "));
      readline.close();
    }
  );
}

main();

// Time complexity: O(n log n)
// Space complexity: O(log n)