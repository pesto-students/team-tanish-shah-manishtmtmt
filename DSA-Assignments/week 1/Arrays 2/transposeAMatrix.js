/*
1 2
3 4

1 3
2 4

1 2 3 4
5 6 7 8

1 5
2 6
3 7
4 8
*/
function getInputArray(rows, cols, elements) {
  elements = elements.split(" ").map(Number);
  let index = 0;
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(elements[index]);
      index++;
    }
    matrix.push(row);
  }
  return matrix;
}

const transposeAMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let output = "";

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      output += matrix[j][i] + " ";
    }
  }
  return output;
};

const rows1 = 2;
const cols1 = 2;
const elements1 = "1 2 3 4";

const matrix1 = getInputArray(rows1, cols1, elements1);
console.log(transposeAMatrix(matrix1)); // 1 3 2 4

const rows2 = 2;
const cols2 = 4;
const elements2 = "1 2 3 4 5 6 7 8";

const matrix2 = getInputArray(rows2, cols2, elements2);
console.log(transposeAMatrix(matrix2)); // 1 5 2 6 3 7 4 8

// Time complexity: O(N^2)
// Space complexity: O(1)
