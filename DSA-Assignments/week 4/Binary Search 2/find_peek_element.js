function findPeekElement(N, arr) {
  if (N <= 1) return 0;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (
      ((arr[mid] > arr[mid - 1]) && (arr[mid] > arr[mid + 1])) ||
      (mid === 0 && arr[mid] > arr[mid + 1]) ||
      (mid === N - 1 && arr[mid] > arr[mid - 1])
    ) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter size of the array and a comma-separated array separated by space (e.g., 5 1,2,3,4,5): ",
    (input) => {
      input = input.trim().split(" ");
      const n = +input[0];
      const arr = input[1].trim().split(",").map(Number);
      const output = findPeekElement(n, arr);
      console.log("output: ", output);
      readline.close();
    }
  );
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)
