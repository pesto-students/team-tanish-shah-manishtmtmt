function reverseAString(str) {
  if (str.length <= 1) {
    return str;
  }
  const firstChar = str[0];
  const restStr = str.slice(1);
  const reversedStr = reverseAString(restStr);
  return reversedStr + firstChar;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter a string: ", (input) => {
    const output = reverseAString(input);
    console.log("output:", output);
    readline.close();
  });
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
