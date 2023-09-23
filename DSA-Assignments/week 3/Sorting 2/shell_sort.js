function sortDateUsingShellSort(input) {
  let n = input.length;

  let timestamps = input.map((el) => (el = Date.parse(el)));

  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size. The first gap elements a[0..gap-1] are already in gapped order keep adding one more element until the entire array is gap sorted
    for (let i = gap; i < n; i += 1) {
      // add arr[i] to the elements that have been gap sorted save arr[i] in temp and make a hole at position i
      let temp = timestamps[i];

      // shift earlier gap-sorted elements up until the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && timestamps[j - gap] > temp; j -= gap) {
        timestamps[j] = timestamps[j - gap];
      }
      // put temp (the original a[i]) in its correct location
      timestamps[j] = temp;
    }
  }

  return timestamps.map((el) => convertTimestampToDateString(el)).join(", ");
}

function convertTimestampToDateString(timestamp) {
  const dateObj = new Date(timestamp);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = dateObj.getHours() % 12 || 12;
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");
  const ampm = dateObj.getHours() >= 12 ? "PM" : "AM";

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter the array of dates as a comma-separated string: ",
    (input) => {
      input = input.trim().split(",");
      const output = sortDateUsingShellSort(input);
      console.log("output: ", output);
      readline.close();
    }
  );
}

main();

// The worst-case complexity for shell sort is  O(n2)
// The best case complexity is O(n log(n))
// The space complexity of the shell sort is O(1).
