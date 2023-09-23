function firstOccurrence(arr, target, i = 0) {
  if (arr[i] === target) return i;
  if (i === arr.length) return -1;

  return firstOccurrence(arr, target, i + 1);
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Please enter comma separated array of integer and target at first: ",
    (input) => {
      input = input.trim().split(",").map(Number);
      
      const [target, ...arr] = input;
      const output = firstOccurrence(arr, target);
      console.log("🚀 ~ file: firstIndexOccurrence.js:22 ~ main ~ output:", output)
      readline.close();
    }
  );
}

main();

// Time complexity: O(N)
// Space complexity: O(N)
