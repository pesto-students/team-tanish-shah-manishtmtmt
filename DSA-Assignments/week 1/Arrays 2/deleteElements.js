const deleteElementInArray = (arr) => {
  const newArr = arr.filter((ele) => ele % 2 !== 0 && ele % 3 !== 0);
  return newArr;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(deleteElementInArray(arr1)); // [1, 5, 7]

const arr2 = [9, 12, 15, 18, 21];
console.log(deleteElementInArray(arr2)); // []

// Time complexity: O(N)
// Space complexity: O(N)