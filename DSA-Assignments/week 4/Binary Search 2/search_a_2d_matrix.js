function isTargetPresent(m, n, matrix, target) {
  let start = 0;
  let end = (m * n) - 1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    let row = Math.floor(mid / n);
    let col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) end = mid -1;
    else start = mid + 1;
  }

  return false;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let m, n;
  let target = null;
  let matrix = [];

  readline.question(
    "Enter row-size, column-size and target of the matrix: ",
    (input) => {
      input = input.trim().split(" ").map(Number);
      m = input[0];
      n = input[1];
      target = input[2];
      console.log("Enter the matrix:");

      readline.on("line", (line) => {
        const row = line.trim().split(" ").map(Number);
        matrix.push(row);

        if (matrix.length === m) {
          readline.close();
        }
      });
    }
  );

  readline.on("close", () => {
    const result = isTargetPresent(m, n, matrix, target);
    console.log(`Is ${target} present in the matrix: ${result}`);
  });
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)