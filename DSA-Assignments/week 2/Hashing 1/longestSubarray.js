function longestSubArrayWithEqual0And1(array) {
  const diffMap = new Map();
  let maxLen = Number.NEGATIVE_INFINITY;
  let diff = 0;

  for (let i = 0; i < array.length; i++) {
    diff = array[i] === 1 ? ++diff : --diff;
    
    if (diff === 0) {
      maxLen = Math.max(maxLen, i + 1);
    }

    if (diffMap.has(diff)) {
      maxLen = Math.max(maxLen, i - diffMap.get(diff));
    } else {
      diffMap.set(diff, i);
    }
  }

  return maxLen;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// Main Program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Please enter the array elements separated by spaces: ",
    (input) => {
      input = input.trim().split(" ").map(Number);
      const result = longestSubArrayWithEqual0And1(input);
      console.log("Longest subarray with equal 0 and 1:", result);
      readline.close();
    }
  );
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
