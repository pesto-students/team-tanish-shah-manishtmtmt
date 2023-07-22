function longestSubArrayWithVowelsAndConsonants(input) {
  let maxLen = 0,
    vowelCount = 0,
    consonantCount = 0;

  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const diffMap = new Map();

  for (let i = 0; i < input.length; i++) {
    if (vowelSet.has(input[i])) {
      vowelCount++;
    } else {
      consonantCount++;
    }

    const diff = vowelCount - consonantCount;

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

// Main Program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Please enter a string: ", (input) => {
    input = input.split("");
    const result = longestSubArrayWithVowelsAndConsonants(input);
    console.log("result: ", result);
    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
