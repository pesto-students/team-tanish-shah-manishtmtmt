import * as readline from "readline";

const climbStairs = (steps: number): number => {
  // create a dynamic programming array dp to store the results.
  const dp = new Array(steps + 1).fill(-1);
  // initialize the base cases: dp[1] = 1 and dp[2] = 2
  dp[1] = 1;
  dp[2] = 2;

  // fill the rest of the array using dynamic programming
  for (let i = 3; i <= steps; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[steps];
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the number of steps: ", (input: string) => {
    const steps: number = +input;

    const numberOfWays: number = climbStairs(steps);
    console.log(
      `Number of the distinct ways to climb the stairs is ${numberOfWays}.`
    );

    rl.close();
  });
};

main();
