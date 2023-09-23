const isEvenOrOdd = num => num % 2 === 0;

const checkEvenOrOdd = () => {
  const num = prompt('Please enter a number');
  if (!num) {
    prompt('Please enter a number');
  }
  return alert(isEvenOrOdd(num) ? "Even" : "Odd");
}

checkEvenOrOdd();

// Time complexity: O(1)
// Space complexity: O(1)