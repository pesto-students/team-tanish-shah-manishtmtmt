function squareRoot(num, precision) {
  let start = 0;
  let end = num;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    let midSquared = mid * mid;

    if (midSquared === num) {
      return mid.toFixed(6);
    } else if (midSquared < num) {
      start = mid + 1;
    } else end = mid - 1;
  }

  return end.toFixed(6);
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter the number: ", (input) => {
    input = +input;
    const output = squareRoot(input, 6);
    console.log("output: ", output);
    readline.close();
  });
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)