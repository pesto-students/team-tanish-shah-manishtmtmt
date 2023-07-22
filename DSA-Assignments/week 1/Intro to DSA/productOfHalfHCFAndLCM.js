const productOfHCFAndLCM = (num1, num2) => {
  let firstNumber = num1 > num2 ? num1 : num2;
  let secondNumber = num1 > num2 ? num2 : num1;

  while (secondNumber !== 0) {
    let temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }

  const hcf = firstNumber;

  const lcm = (num1 * num2) / hcf;

  return lcm * hcf;
};

// Time complexity: O(log(N))
// Space complexity: O(1)