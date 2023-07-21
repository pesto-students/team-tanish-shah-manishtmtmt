function reversedNumber(num) {
  let reversedNum = 0;
  while (num !== 0) {
    let remainder = num % 10;
    reversedNum = reversedNum * 10 + remainder;
    num = parseInt(num / 10);
  }
  return reversedNum;
}

function isPalindrome(num) {
  const reversedNum = reversedNumber(num);
  return num === reversedNum;
}

function checkPalindrome() {
  const num = prompt("Please enter a number");
  if (!num) {
    prompt("Please enter a number");
  }
  alert(isPalindrome(num) ? "Yes" : "No");
}

checkPalindrome();

// Time complexity: O(log(N))
// Space complexity: O(1)
