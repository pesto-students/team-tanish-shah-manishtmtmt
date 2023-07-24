function mazePath(currentRow, currentCol, rows, cols, path, result) {
  if ((currentRow === rows - 1) && (currentCol === cols - 1)) {
    result.push(path);
    return;
  }

  if ((currentRow >= rows) || (currentCol >= cols)) {
    return;
  }

  mazePath(currentRow, currentCol + 1, rows, cols, path + "R", result);
  mazePath(currentRow + 1, currentCol, rows, cols, path + "D", result);

}

// main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question("Enter the dimensions of the maze (3 3): ", input => {
    const [m, n] = input.trim().split(" ").map(Number);

    const result = [];
    mazePath(0, 0, m, n, "", result);
    console.log(result);
    readline.close();
  })
}

main();

// Time complexity: O(2^N)
// Space complexity: O(N)