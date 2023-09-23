function getInputArray(rows, cols, elements) {
  elements = elements.split(',').map(Number);
  let index = 0;
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(elements[index])
      index++;
    }
    matrix.push(row)
  }
  return matrix;
}

const calculateSumOfArrays = (arr1, arr2) => {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const row2 = arr2.length;
  const col2 = arr2[0].length;
  
  if (!((row1 === row2) && (col1 === col2))) {
    return "Arrays must have the same dimensions";
  }
  
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      row.push(sum)
    }
    result.push(row);
  }

  return result;
}

const rows1 = 2;
const cols1 = 3;
const elements1 = '1, 2, 3, 4, 5, 6';

const rows2 = 2;
const cols2 = 3;
const elements2 = '7, 8, 9, 10, 11, 12';

const arr1 = getInputArray(rows1, cols1, elements1);
const arr2 = getInputArray(rows2, cols2, elements2);

console.log(calculateSumOfArrays(arr1, arr2)); // [ [ 8, 10, 12 ], [ 14, 16, 18 ] ]

const rows3 = 2;
const cols3 = 2;
const elements3 = '1, 2, 3, 4';

const rows4 = 2;
const cols4 = 2;
const elements4 = '5, 6, 7, 8';

const arr3 = getInputArray(rows3, cols3, elements3);
const arr4 = getInputArray(rows4, cols4, elements4);

console.log(calculateSumOfArrays(arr3, arr4)); // [ [ 6, 8 ], [ 10, 12 ] ]

// Time complexity: O(N^2)
// Space complexity: O(N^2)