function minimumWindow(str1, str2) {
  const targetCount = new Map();

  for (let i = 0; i < str2.length; i++) {
    targetCount.set(str2[i], (targetCount.get(str2[i]) || 0) + 1);
  }

  let left = 0;
  let right = 0;

  let minWindow = "";
  let minLength = Number.POSITIVE_INFINITY;

  let requiredCount = str2.length;

  while (right < str1.length) {
    const rightChar = str1[right];

    if (targetCount.has(rightChar)) {
      targetCount.set(rightChar, targetCount.get(rightChar) - 1);
      if (targetCount.get(rightChar) >= 0) {
        requiredCount--;
      }
    }

    right++;

    while (requiredCount === 0) {
      if (right - left < minLength) {
        minLength = right - left;
        minWindow = str1.slice(left, right);
      }

      const leftChar = str1[left];

      if (targetCount.has(leftChar)) {
        targetCount.set(leftChar, targetCount.get(leftChar) + 1);
        if (targetCount.get(leftChar) > 0) {
          requiredCount++;
        }
      }

      left++;
    }
  }

  return minWindow;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Input format (e.g. str1 str2) : ", (input) => {
    const [str1, str2] = input.trim().split(" ");
    const output = minimumWindow(str1, str2);
    console.log(
      "🚀 ~ file: minimumWindowSubstring.js:57 ~ readline.question ~ output:",
      output
    );
    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
