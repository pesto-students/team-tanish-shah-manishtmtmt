function numberOfVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let count = 0;
  for (let char of str) {
    if (vowels.has(char)) count++;
  }

  return count;
}

// creating a swap function
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function cocktailShakerSort(arr) {
  let swapped = true;
  let start = 0;
  let end = arr.length;

  while (swapped) {
    // reset the swapped flag on entering the loop, because it might be true from a previous iteration.
    swapped = false;

    // loop from bottom to top same as the bubble sort
    for (let i = start; i < end - 1; i++) {
      if (numberOfVowels(arr[i]) > numberOfVowels(arr[i + 1])) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // if nothing moved, then array is sorted.
    if (!swapped) break;

    // otherwise, reset the swapped flag so that it can be used in the next stage
    swapped = false;

    // move the end point back by one, because item at the end is in its rightful spot
    end--;

    // from top to bottom, doing the same comparison as in the previous stage
    for (let i = end - 1; i >= start; i--) {
      if (numberOfVowels(arr[i]) > numberOfVowels(arr[i + 1])) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // increase the starting point, because the last stage would have moved the next smallest number to its rightful spot.
    start++;
  }
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the strings as a comma-separated string: ",
    (input) => {
      input = input.trim().split(",");

      cocktailShakerSort(input);

      console.log("sorted arr:", input.join(" "));

      readline.close();
    }
  );
}

main();
