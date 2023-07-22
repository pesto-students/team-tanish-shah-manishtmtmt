function longestPalindromicSubstring(input) {
  let start = 0;
  let maxLength = 0;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < input.length && input[left] === input[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < input.length; i++) {
    const len1 = expandFromCenter(i, i);

    const len2 = expandFromCenter(i, i + 1);

    const len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return input.slice(start, start + maxLength);
}

// Main Program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter a string: ", (input) => {
    const result = longestPalindromicSubstring(input);
    console.log("Longest Palindromic Substring: ", result);

    readline.close();
  });

}

main();

// Time complexity: O(N^2)
// Space complexity: O(1)
