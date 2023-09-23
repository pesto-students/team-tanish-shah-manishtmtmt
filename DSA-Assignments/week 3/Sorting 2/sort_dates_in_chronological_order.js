function mergeSortDates(datesArr) {
  const formattedDatesArr = datesArr.map((element) => {
    return element.split("-").join("");
  });

  const sortedDatesArr = mergeSort(formattedDatesArr);
  return sortedDatesArr.map(
    (date) => `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`
  );
}

// merge function
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

  readline.question(
    'Enter the dates as a comma-separated string in the format "YYYY-MM-DD": ',
    (input) => {
      input = input.trim().split(",");
      const output = mergeSortDates(input);
      console.log("output:\n" + output.join("\n"));
      readline.close();
    }
  );
}

main();

// Time complexity: O(n log n)
// Space complexity: O ( n )
