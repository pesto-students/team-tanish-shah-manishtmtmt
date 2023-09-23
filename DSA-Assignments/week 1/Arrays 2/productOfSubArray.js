const maxProductOfSubArray = (N, arr) => {
  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  for (let i = 1; i < N; i++) {
    if (arr[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(maxProduct * arr[i], arr[i]);
    minProduct = Math.min(minProduct * arr[i], arr[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
};

const arr1 = [2, 3, -2, 4, 5];
const N1 = 5;
console.log(maxProductOfSubArray(N1, arr1)); // 20

const arr2 = [-1, -2, -3, -4];
const N2 = 4;
console.log(maxProductOfSubArray(N2, arr2)); // 24

// Time complexity: O(N);
// Space complexity: O(1)
