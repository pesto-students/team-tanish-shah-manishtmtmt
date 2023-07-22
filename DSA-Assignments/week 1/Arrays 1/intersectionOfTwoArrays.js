const intersectionOfTwoArray = (arr1, arr2) => {
  const mySet = new Set(arr2);
  
  const intersectionArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (mySet.has(arr1[i])) {
      intersectionArray.push(arr1[i]);
    }
  }

  return intersectionArray;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(intersectionOfTwoArray(arr1, arr2)); // [4, 5]

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [5, 4, 3, 2, 1];
console.log(intersectionOfTwoArray(arr3, arr4)); // [1, 2, 3, 4, 5]

// Time complexity: O(N)
// Space complexity: O(N)