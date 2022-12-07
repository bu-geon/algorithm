// 498. Diagonal Traverse
var findDiagonalOrder = function (mat) {
  const row = mat.length;
  const column = mat[0].length;

  const arr = Array.from({ length: row + column - 1 }, () => []);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if ((i + j) % 2 === 0) arr[i + j].unshift(mat[i][j]);
      else arr[i + j].push(mat[i][j]);
    }
  }

  return arr.flat();
};
