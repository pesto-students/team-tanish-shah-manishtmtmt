import * as readline from 'readline';

const canPartition = (nums: number[]): boolean => {
  // calculate the total sum of the numbers in the number set
  const totalSum: number = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  // if the total sum is odd, it cannot be divided into two equal subsets, so return false
  if (!(totalSum % 2 === 0)) return false;

  // calculate teh target sum for each sumbset, which is half of the total sum
  const targetSum: number = totalSum / 2;

  // create a dynamic programming array dp to store the results
  const dp: boolean[] = new Array(targetSum + 1).fill(false);

  // initialize dp[0] as true since an empty subset can have a sum of 0.
  dp[0] = true;

  // iterate through each number in the number set
  for (let num of nums) {
    // iterate from the target sum down to the current number
    for (let j: number = targetSum; j >= num; j--) {
      // check if including the current number can reach the current sum
      dp[j] = dp[j] || dp[j - num];
    }
  }

  // return dp[targetSum]
  return dp[targetSum];
}

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter the set of positive integers as a space-separated string: ', (input: string) => {
    const nums: number[] = input.trim().split(" ").map(Number);

    const result: boolean = canPartition(nums);
    console.log(`The given set of positive integers ${JSON.stringify(nums)} can${result ? '' : ' not'} be partitioned into two equal subsets`);

    rl.close();
  })
}

main();