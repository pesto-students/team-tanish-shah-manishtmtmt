function reverseANumber(num) {
  let reversedNum = 0;
  while (num !== 0) {
    let remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    num = parseInt(num / 10);
  }
  return reversedNum;
}

// Time complexity: O(log(N))
// Space complexity: O(1)
