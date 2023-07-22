const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

function printAllPermutations(arr, start, result) {
  if (start === arr.length) {
    result.push(arr.join(""));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    swap(arr, start, i);
    printAllPermutations(arr, start + 1, result);
    swap(arr, start, i);
  }
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Please enter a string: ", (input) => {
    const result = [];
    input = input.trim().split("");
    printAllPermutations(input, 0, result);
    console.log("result: ", result.join(" "));
    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
