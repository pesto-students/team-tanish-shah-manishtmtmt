function medianOfTwoSortedArrays(m, n, arr1, arr2) {
  let nums1 = null,
    nums2 = null,
    M = null,
    N = null;
  if (m < n) {
    nums1 = arr1;
    nums2 = arr2;
    M = m;
    N = n;
  } else {
    nums1 = arr2;
    nums2 = arr1;
    M = n;
    N = m;
  }

  let start = 0;
  let end = M - 1;

  while(start <= end) {
    let mid1 = Math.floor((start + end) / 2);
    let mid2 = Math.floor((M + N + 1) / 2) - mid1;

    let maxLeft1 = (mid1 === 0) ? -Infinity : nums1[mid1 - 1];
    let maxLeft2 = (mid2 === 0) ? -Infinity : nums2[mid2 - 1];

    let minRight1 = (mid1 === M) ? Infinity : nums1[mid1];
    let minRight2 = (mid2 === N) ? Infinity : nums2[mid2];

    if ((maxLeft1 <= minRight2) && (maxLeft2 <= minRight1)) {
      return (M + N) % 2 === 0 ? (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2 : Math.max(maxLeft1, maxLeft2)
    } else if (maxLeft1 > minRight2) {
      end = mid1 - 1;
    } else if (maxLeft2 > minRight1) {
      start = mid1 + 1;
    }
  }

  return 0;
}

// main program
function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Enter your input (e.g., 4, 1 3 5 7, 3, 2 4 6): ",
    (input) => {
      input = input.trim("").split(", ");
      const m = +input[0];
      const nums1 = input[1].trim().split(" ").map(Number);
      const n = +input[2];
      const nums2 = input[3].trim().split(" ").map(Number);
      const output = medianOfTwoSortedArrays(m, n, nums1, nums2);
      console.log("output:", output);
      readline.close();
    }
  );
}

main();

// Time complexity: O(log n)
// Space complexity: O(1)