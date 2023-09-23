
import * as readline from "readline";

function calculateFibonacci(N: number): number {
  if (N <= 0) return 0;
  if (N === 1) return 1;
  // create an array fib to store the fibonacci numbers
  const fib: number[] = new Array(N + 1);
  fib[0] = 0;
  fib[1] = 1;
  // loop through each index of the array and add them together.
  for (let i: number = 2; i <= N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[N];
}

// main program
function main(): void {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter an integer value of n: ",
    (input: string) => {
      const N: number = parseInt(input, 10);
      const fibonacciNumber: number = calculateFibonacci(N);
      console.log(`The ${N}th Fibonacci number is:`, fibonacciNumber);
      rl.close();
    }
  );
}

main();
