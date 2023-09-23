import * as readline from "readline";

const longestPalindromicSubsequence = (str: string): number => {
  // get the length of the string
  const n: number = str.length;

  // create a dynamic programming array dp of size n x n to store the results.
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // initialize the base case: a single character is a palindrome of length 1: dp[i][i] = 1 for all i.
  for (let i: number = 0; i < n; i++) dp[i][i] = 1;

  // fill the dynamic programming array by considering all possoble subproblems
  // iterate over the subsequence length len from 2 to n
  for (let len: number = 2; len <= n; len++) {
    // iterate over the start indices i from 0 to n - len
    for (let i: number = 0; i < n - len + 1; i++) {
      // calculate the end index j as i + len - 1
      const j: number = i + len - 1;
      // if the characters at both ends are the same, increment the length of the palindromic subsequence by 2: dp[i][j] = dp[i + 1][j - 1] + 2
      dp[i][j] =
        str[i] === str[j] && len === 2
          ? 2
          : str[i] === str[j]
          ? dp[i + 1][j - 1] + 2
          : Math.max(dp[i][j - 1], dp[i + 1][j]);
    }
  }
  return dp[0][n - 1];
};

const main = (): void => {
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a string: ", (input: string) => {
    const result: number = longestPalindromicSubsequence(input);

    console.log(`Length of the longest palindromic subsequence: ${result}`);

    rl.close();
  });
};

main();
