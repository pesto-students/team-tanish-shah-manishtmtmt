
import * as readline from 'readline';

function coinChange(coins: number[], target: number): number {
  const dp = new Array<number>(target + 1).fill(Infinity);
  dp[0] = 0;
  for (let i: number = 1 ;i <= target; ++i) {
    for (const c of coins) {
      if (c <= i) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }
  return dp[target] !== Infinity ? dp[target] : -1;
}

function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the coin denominations as a space-separated string of integers: ', (input: string) => {
    const coins: number[] = input.trim().split(" ").map(Number);

    rl.question('Enter the target amount as a single integer: ', (input: string) => {
      const target: number = parseInt(input);
      const result: number = coinChange(coins, target);
      console.log("Minimum number of coins required to make the change:");
      console.log(result);
      rl.close();
    })
  })
}

main();
