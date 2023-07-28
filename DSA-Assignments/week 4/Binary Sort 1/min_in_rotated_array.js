function minInRotatedArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr[left];
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter array as comma-separated: ", (input) => {
    input = input.trim().split(",").map(Number);

    const output = minInRotatedArray(input);
    console.log("output:", output);
    readline.close();
  });
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)