// 931. Minimum Falling Path Sum
var minFallingPathSum = function (matrix) {
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[r][c] += Math.min(
        matrix[r - 1][c - 1] || Infinity,
        matrix[r - 1][c],
        matrix[r - 1][c + 1] || Infinity
      );
    }
  }

  return Math.min(...matrix.at(-1));
};
