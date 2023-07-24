function allIndicesInArray(arr, target, i, result) {
  if (arr[i] === target) {
    result.push(i);
  }

  if (i === arr.length - 1) {
    return;
  }

  allIndicesInArray(arr, target, i + 1, result);
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Please enter array comma separated and target value space separated: ",
    (input) => {
      input = input.trim().split(" ");

      const arr = input[0].trim().split(",").map(Number);
      const target = +arr[1];
      const result = [];
      allIndicesInArray(arr, target, 0, result);
      console.log("result:", result);
      readline.close();
    }
  );
}

main();

// Time complexity: O(N)
// Space complexity: O(1)
