// 74. Search a 2D Matrix
var searchMatrix = function (matrix, target) {
  let [top, bottom] = [0, matrix.length - 1];
  while (top <= bottom) {
    const midRow = parseInt((top + bottom) / 2);

    if (target < matrix[midRow][0]) {
      bottom = midRow - 1;
    } else if (target > matrix[midRow].at(-1)) {
      top = midRow + 1;
    } else {
      return matrix[midRow].includes(target);
    }
  }
};

// var searchMatrix = function (matrix, target) {
//   let [top, bottom] = [0, matrix.length - 1];
//   while (top <= bottom) {
//     const midRow = parseInt((top + bottom) / 2);

//     if (target < matrix[midRow][0]) {
//       bottom = midRow - 1;
//     } else if (target > matrix[midRow].at(-1)) {
//       top = midRow + 1;
//     } else {
//       return matrix[midRow].includes(target);
//     }
//   }

//   return false;
// };

// var searchMatrix = function (matrix, target) {
//   let [row, col] = [0, matrix[0].length - 1];

//   while (row < matrix.length && col >= 0) {
//     if (matrix[row].at(-1) < target) {
//       row++;
//       continue;
//     }

//     if (matrix[row][col] === target) return true;
//     col--;
//   }

//   return false;
// };
