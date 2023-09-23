const nonDuplicateElement = (arr) => {
  const myMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    } else {
      myMap.set(arr[i], 1);
    }
  }

  for (let [key, value] of myMap) {
    if (value === 1) return key;
  }
};

const arr1 = [5, 2, 3, 2, 5];
console.log(nonDuplicateElement(arr1)); // 3

const arr2 = [-1, -1, -2, -2, -3];
console.log(nonDuplicateElement(arr2)); // -3

// Time complexity: O(N)
// Space complexity: O(N)