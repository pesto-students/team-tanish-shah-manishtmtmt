function maxStrengthOfHorse(N, K, arr) {
  const horses = arr.map((strength, index) => [strength, index]);
  let groups = [horses];

  while(K > 1) {
    const newGroup = [];
    for (let i = 0; i < groups.length; i += 2) {
      const mergedGroup = groups[i].concat(groups[i + 1]);
      newGroup.push(mergedGroup);
    }
    groups = newGroup;
    K--;
  }

  return race(groups);
}

function race(groups) {
  if (groups.length === 1) {
    return groups[0].reduce((maxIndex, current, index, arr) => (current > arr[maxIndex] ? index : maxIndex), 0);
  }

  let mid = Math.floor(groups.length / 2);
  let group1 = groups.slice(0, mid);
  let group2 = groups.slice(mid);

  let winner1 = race(group1);
  let winner2 = race(group2);

  return groups[winner1][0] > groups[winner2][0] ? winner1 : winner2;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter N and K on the first line and on the second line N space-separated integers (e.g., 5 2, 4 2 7 5 1): ",
    (input) => {
      input = input.trim().split(", ");
      const [n, k] = input[0].trim().split(" ").map(Number);
      const arr = input[1].trim().split(" ").map(Number);
      const output = maxStrengthOfHorse(n, k, arr);
      console.log("output: ", output);
      readline.close();
    }
  );
}

main();

// Time complexity: O(n)
// Space complexity: O(n)
