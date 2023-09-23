function bucketSort(arr) {
  const evenNumbers = [];
  const oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNumbers.push(arr[i]);
    else oddNumbers.push(arr[i]);
  }

  const sortedEvenNum = mergeSort(evenNumbers);
  const sortedOddNum = mergeSort(oddNumbers);

  return [...sortedEvenNum, ...sortedOddNum];
}

// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter numbers separated by spaces: ", (input) => {
    input = input.trim().split(" ").map(Number);
    const output = bucketSort(input);
    console.log("output: ", output);
    readline.close();
  });
}

main();

// Time complexity: O(n log n)
// Space complexity: O(n)
