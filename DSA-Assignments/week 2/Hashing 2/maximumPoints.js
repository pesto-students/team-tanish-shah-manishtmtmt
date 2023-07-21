function maximumPoints(arr) {
  let max = 0;
  const slopeSet = new Map();
  for (let i = 0; i < arr.length; i++) {
    const slop = arr[i][0] - arr[i][1];
    if (slopeSet.has(slop)) {
      slopeSet.set(slop, slopeSet.get(slop) + 1)
    } else {
      slopeSet.set(slop, 1);
    }

    max = Math.max(max, slopeSet.get(slop));
  }

  return max;
}

// main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Please enter input (e.g. 1 1, 2 2, 3 3): ", input => {
    input = input.trim().split(",");
    input = input.map(element => element.trim().split(" "));
    const output = maximumPoints(input);
    console.log("🚀 ~ file: maximumPoints.js:29 ~ readline.question ~ output:", output)
    readline.close();
  })
}

main();

// Time complexity: O(N)
// Space complexity: O(K) where K is the number of the unique slopes in the input array