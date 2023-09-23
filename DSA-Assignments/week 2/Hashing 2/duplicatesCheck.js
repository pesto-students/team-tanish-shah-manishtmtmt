function checkDuplicate(input) {
  const hashTable = new Map();

  for (let element of input) {
    if (hashTable.has(element)) {
      console.log("There are duplicate elements in the array.")
      return;
    } else {
      hashTable.set(element, 1);
    }
  }

  console.log("There are no duplicate elements in the array.");
  return;
}

// Main Program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Please enter a series of integers separated by spaces: ",
    (input) => {
      input = input.trim().split(" ");
      checkDuplicate(input);
      readline.close();
    }
  );
}

main();

// Time complexity: O(N)
// Space complexity: O(N)