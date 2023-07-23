// approach 1:
function subsequence(str, index = 0) {
  if (index === str.length) {
    return [''];
  }

  const subsequenceWithCurrentChar = subsequence(str, index + 1).map(subSeq => str[index] + subSeq);
  const subsequenceWithoutCurrenChar = subsequence(str, index + 1);

  return [...subsequenceWithCurrentChar, ...subsequenceWithoutCurrenChar];
}

// approach 2:
function findAllSubsequeces(ans, str, index, result) {
  if (ans.length >= 0) {
    result.push(ans.join(""));
  }
  if (index >= str.length) return;
  for (var i = index; i < str.length; i++) {
    ans.push(str[i]);
    findAllSubsequeces(ans, str, i + 1, result);
    ans.pop();
  }
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Enter a string: ", input => {
    
    const output = subsequence(input);
    console.log("output from approach 1: ", output);

    const result = [];
    findAllSubsequeces([], input, 0, result);
    console.log("output from approach 2:", result);
    readline.close();
  })
}

main();

// Time complexity for approach 1: O(2^N)
// Space complexity for approach 2: O(N*2^N)

// Time complexity for approach 2: O(N*2^N)
// Space complexity for approach 2: O(2^N)

