function selectionSort(arr) {

  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }

  return arr;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter an array containing comma-separated strings: ",
    (input) => {
      input = input.trim().split(",");
      const output = selectionSort(input);
      console.log(
        "🚀 ~ file: sort_array_of_strings_alphabetically.js:13 ~ main ~ output:",
        output
      );
      readline.close();
    }
  );
}

main();

// Time complexity: O(N^2)
// Space complexity: O(1)
