function lastOccurrenceOfTarget(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (
      (mid === arr.length - 1 || arr[mid + 1] > target) &&
      arr[mid] === target
    ) {
      return mid;
    } else if (arr[mid] <= target) {
      low = mid + 1;
    } else high = mid - 1;
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
    "Enter the comma-separated array and the target element separated by space from array (e.g., 1,2,3,4,5 3): ",
    (input) => {
      input = input.trim().split(" ");
      const arr = input[0].trim().split(",").map(Number);
      const target = +input[1];
      const output = lastOccurrenceOfTarget(arr, target);
      console.log("output: ", output);
      readline.close();
    }
  );
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)