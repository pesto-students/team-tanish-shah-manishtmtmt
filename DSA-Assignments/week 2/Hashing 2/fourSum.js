function fourSum(array, target) {
  // Create an empty hash table to store the sums of pairs.
  const hashTable = {};

  // Create an empty result array to store the unique quadruplets.
  const result = [];

  // Iterate through each pair of elements in the array (outer loop).
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Calculate the sum = array[i] + array[j].
      const sum = array[i] + array[j];

      // Calculate the complement = target - sum.
      const complement = target - sum;

      // Check if the complement exists in the hash table. If it does, add the pair and its complement to the result.
      if (hashTable.hasOwnProperty(complement)) {
        const quadruplet = [array[i], array[j], ...hashTable[complement]];
        quadruplet.sort();
        let found = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === quadruplet) {
            found = true;
            break;
          }
        }
        if (!found) {
          result.push(quadruplet);
        }
      }
    }
  }

  // Add the sum to the hash table with the pair as the value.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      hashTable[sum] = [array[i], array[j]];
    }
  }

  // Return the result array.
  return result;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Please enter a comma separated array and a target sum separated by space: ",
    (input) => {
      input = input.trim().split(" ");
      let [arr, target] = input;
      arr = arr.split(",").map(Number);
      const output = fourSum(arr, target);
      console.log("🚀 ~ file: fourSum.js:43 ~ main ~ output:", output);
      readline.close();
    }
  );
}

main();
