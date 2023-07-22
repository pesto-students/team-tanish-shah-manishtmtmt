function nonRepeatingCharacter (char) {
  const hashTable = new Map();

  for (let i = 0; i < char.length; i++) {
    if (hashTable.has(char[i])) {
      hashTable.set(char[i], hashTable.get(char[i]) + 1);
    } else {
      hashTable.set(char[i], 1);
    }
  }

  for (let i = 0; i < char.length; i++) {
    if (hashTable.has(char[i]) && hashTable.get(char[i]) === 1) {
      return char[i];
    }
  }

  return "No non-repeating characters found.";
}

// Main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question("Please enter a string: ", input => {
    console.log(input);
    const output = nonRepeatingCharacter(input);
    console.log("output: " + output);
    readline.close();
  })
}

main();

// Time complexity: O(N)
// Space complexity: O(K) where K is number of unique characters in the input string.