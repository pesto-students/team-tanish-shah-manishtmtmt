const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

function findPivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] > pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = findPivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr.join(" ");
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the numbers as a space-separated string: ",
    (input) => {
      input = input.trim().split(" ").map(Number);

      const output = quickSort(input);
      console.log(
        "🚀 ~ file: sort_array_of_numbers_in_descending_order.js:43 ~ main ~ output:",
        output
      );
      readline.close();
    }
  );
}

main();

/*

Time Complexity:
Best case: O(n lon n)
Worst case: O(n^2)

Space Complexity:
Best case: O(log n)
Worst case: O(n)

*/
