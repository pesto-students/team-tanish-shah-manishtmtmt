// const pairOfSum = (arr, S) => {
//   const pairs = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       if (sum === S) pairs.push([arr[i], arr[j]]);
//     }
//   };

//   return pairs;
// }

const pairOfSum = (arr, S) => {
  const mySet = new Set();
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    const compliment = S - arr[i];
    if (mySet.has(compliment)) {
      pairs.push([compliment, arr[i]]);
    }
    mySet.add(arr[i]);
  }

  return pairs;
};

const arr1 = [2, 4, 6, 8, 10];
const S1 = 12;
console.log(pairOfSum(arr1, S1)); // [ [ 2, 10 ], [ 4, 8 ] ]

const arr2 = [1, 1, 1, 1, 1];
const S2 = 2;
console.log(pairOfSum(arr2, S2)); // [ [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ], [ 1, 1 ] ]

// Time complexity: O(N)
// Space complexity: O(N)