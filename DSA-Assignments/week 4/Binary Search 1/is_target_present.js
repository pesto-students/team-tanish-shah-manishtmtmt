function isTargetPresent(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter array as comma-separated and target separated by space: ",
    (input) => {
      input = input.trim().split(" ");
      const arr = input[0].trim().split(",").map(Number);
      const target = +input[1];

      const output = isTargetPresent(arr, target);
      console.log("output:", output);
      readline.close();
    }
  );
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)