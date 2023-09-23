function findLongestConsecutiveSubsequence(input) {
  const arr = input.split(" ").map(Number);

  const numsSet = new Set(arr);

  let maxLength = 0;

  for (let num of arr) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      let currentNum = num + 1;

      while (numsSet.has(currentNum)) {
        length++;
        currentNum++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

// Test Case 1
// console.log(findLongestConsecutiveSubsequence("100 4 200 1 3 2")); // Output: 4

// Test Case 2
// console.log(findLongestConsecutiveSubsequence("10 5 7 3 4 8 9")); // Output: 5

// Main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter space-seperated array (e.g., '100 4 200 1 3 2'): ", (input) => {

    const output = findLongestConsecutiveSubsequence(input);

    console.log("Output:", output);

    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)