function countingSort(arr) {
  const max = Math.max(...arr);

  const countArr = Array.from({ length: max + 1 }).fill(0);

  const sortedArr = [];

  for (let ele of arr) {
    countArr[ele]++;
  }

  for (let i = 0; i < countArr.length; i++) {
    for (let j = 0; j < countArr[i]; j++) {
      sortedArr.push(i);
    }
  }

  return sortedArr;
}

// main program
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Enter the positive integers as a comma-separated string: ', input => {
        input = input.trim().split(",").map(Number);
        const output = countingSort(input);
        console.log("output: ", output.join(" "));
        readline.close();
    })
}

main();

// Time complexity: O(n*K);
// Space complexity: O(n);
