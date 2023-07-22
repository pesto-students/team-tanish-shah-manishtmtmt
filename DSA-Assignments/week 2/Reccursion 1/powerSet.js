function powerSet(input) {
  const powerSet = [];


  function helper(subSet, ind) {
    if (subSet.length <= input.length) {
      powerSet.push([...subSet]);
    }

    for (let i = ind; i < input.length; i++) {
      subSet.push(input[i]);
      helper(subSet, i + 1);
      subSet.pop();
    }
  }

  helper([], 0);
  return powerSet;
}

// main program
function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question('Please enter a string of space-separated distinct integers: ', input => {
    input = input.trim().split(" ");
    const output = powerSet(input);
    console.log("🚀 ~ file: powerSet.js:31 ~ main ~ output:", output)
    readline.close();
  })
}

main();

// Time complexity: O(2^N)
// Space complexity: O(2^N)