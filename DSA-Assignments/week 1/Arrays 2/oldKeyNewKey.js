const oldKeyNewKey = (arr, oldKey, newKey) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldKey) arr[i] = newKey;
  };
  return arr;
};

const arr1 = [1, 2, 3, 2, 4, 2, 5];
const oldKey1 = 2;
const newKey1 = 6;
console.log(oldKeyNewKey(arr1, oldKey1, newKey1)); // [1, 6, 3, 6, 4, 6, 5]

const arr2 = [5, 5, 5, 5];
const oldKey2 = 5;
const newKey2 = 2;
console.log(oldKeyNewKey(arr2, oldKey2, newKey2)); // [2, 2, 2, 2]

// Time complexity: O(N)
// Space complexity: O(1)