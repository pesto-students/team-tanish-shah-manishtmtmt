function isSafe(board, row, col, N) {
  // check if no queen present in the same column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  // check if no queen is present in the same diagonal
  for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == 1) return false;
  }

  // check if no queen is present in the same anti-diagonal
  for (var i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
    if (board[i][j] == 1) return false;
  }

  return true;
}

function solveNQueens(N, row, board, result) {
  // Base case
  if (row === N) {
    result.push(board.map((row) => [...row]));
    return;
  }

  for (let col = 0; col < N; col++) {
    if (isSafe(board, row, col, N)) {
      board[row][col] = 1;
      solveNQueens(N, row + 1, board, result);
      board[row][col] = 0;
    }
  }
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter the size of the chessboard: ", (input) => {
    const N = Number(input);
    const result = [];
    const board = Array.from({ length: N }, () => Array(N).fill(0));
    solveNQueens(N, 0, board, result);
    console.log(
      "output:",
      result.length ? result : "No possible arrangements."
    );
    readline.close();
  });
}

main();

// Time complexity: O(N!)
// Space complexity: O(N^2)
