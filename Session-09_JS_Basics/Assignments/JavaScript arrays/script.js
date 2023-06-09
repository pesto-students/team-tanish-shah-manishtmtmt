// Put your solution here
const divideArray = (nums) => {
  // length of the nums array
  const N = nums.length;

  // creating two empty array for storing evenNums and oddNums
  const evenNums = [];
  const oddNums = [];

  for (let i = 0; i < N; i++) {
    const num = nums[i];
    // cheking if number is even
    if (num % 2 === 0) evenNums.push(num);
    else oddNums.push(num)
  }

  // sorting the array with sort method
  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => a - b);

  console.log("Even numbers:");
  evenNums.length ? console.log(evenNums.join("\n")) : console.log("None");

  console.log("Odd numbers");
  oddNums.length ? console.log(oddNums.join("\n")) : console.log("None");
}
