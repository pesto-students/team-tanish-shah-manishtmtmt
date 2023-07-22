const sumOfMinAndMaxOfArray = (arr) => {
  return Math.max(...arr) + Math.min(...arr);
};

const arr1 = [5, 2, 9, 1, 7];
console.log(sumOfMinAndMaxOfArray(arr1)); // 10

const arr2 = [-10, 0, 100, -50, 20];
console.log(sumOfMinAndMaxOfArray(arr2)); // 50

// Time complexity: O(N)
// Space complexity: O(1)