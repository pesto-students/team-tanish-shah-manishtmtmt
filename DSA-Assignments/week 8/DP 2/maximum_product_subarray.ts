import * as readline from "readline";

const maxProductSubarray = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  let maxProduct: number = nums[0];
  let minProduct: number = nums[0];
  let result: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);

    result = Math.max(result, maxProduct)
  }
  return result;
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Enter an array of integers, separated by spaces: ",
    (input: string) => {
      let nums: number[] = input.trim().split(" ").map(Number);

      const result: number = maxProductSubarray(nums);
      console.log(`Maximum product subarray: ${result}`);

      rl.close();
    }
  );
};

main();