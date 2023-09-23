function recursiveSum(arr, i = 0) {
  if (arr.length === 0) return 0;
  if (i === arr.length - 1) return arr[i];

  return arr[i] + recursiveSum(arr, i + 1);
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Please enter comma separated integer: ", (input) => {
    input = input.trim().split(",").map(Number);
    const result = recursiveSum(input);

    console.log("Output: ", result);
    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
