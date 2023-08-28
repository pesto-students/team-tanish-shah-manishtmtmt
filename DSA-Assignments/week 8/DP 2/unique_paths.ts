import * as readline from "readline";

const uniquePath = (rows: number, columns: number): number => {
  // create a dynamic programming array dp of size rows x columns to store the results
  const dp: number[][] = new Array(rows).fill(0).map(() => new Array(columns).fill(0));

  for (let i: number = 0; i < rows; i++) {
    dp[i][0] = 1;
  }

  for (let j: number = 0; j < columns; j++) {
    dp[0][j] = 1;
  }

  for (let i: number = 1; i < rows; i++) {
    for (let j: number = 1; j < columns; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[rows - 1][columns - 1];

}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter the number of rows and the number of columns separated by space: ",
    (input: string) => {
      const [rows, columns] = input.trim().split(" ").map(Number);

      const result: number = uniquePath(rows, columns);
      console.log(`The total number of unique paths is ${result}.`);
      rl.close();
    }
  );
};

main();
