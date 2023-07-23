function bubbleSort(arr) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr.join(" ");
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the numbers as a space-separated string: ",
    (input) => {
      input = input.trim().split(" ").map(Number);

      const output = bubbleSort(input);
      console.log("🚀 ~ file: sort_array_of_numbers_in_ascending_order.js:29 ~ main ~ output:", output)
      readline.close();
    }
  );
}

main();

// Time complexity: O(N^2)
// Space complexity: O(1)
