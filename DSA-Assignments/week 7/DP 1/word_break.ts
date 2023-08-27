import * as readline from "readline";

const wordBreak = (word: string, dictionaryWords: string[]): boolean => {
  // create a dynamic programming array dp to store the results
  let dp: boolean[] = new Array(word.length).fill(false);
  // initialize dp[0] as true since the empty string is always present in the dictionary
  dp[0] = true;
  // iterate through each character of the string
  for (let i: number = 1; i <= word.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && dictionaryWords.includes(word.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[word.length];
};

// main program
function main(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a string: ", (input: string) => {
    const str: string = input;

    rl.question(
      "Enter the dictionary words as a space-separated string: ",
      (input: string) => {
        const dictionaryWords: string[] = input.trim().split(" ");
        const result = wordBreak(str, dictionaryWords);
        console.log(
          `String can${
            result ? "" : " not"
          } be segmented into dictionary words.`
        );
        rl.close();
      }
    );
  });
}

main();
