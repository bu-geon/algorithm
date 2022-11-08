// 1706. Where Will the Ball Fall
var findBall = function (grid) {
  const dfs = (row, col) => {
    if (row === grid.length) return col;

    const diagonal = grid[row][col];
    if (diagonal === 1 && grid[row][col + 1] === 1) return dfs(row + 1, col + 1);
    if (diagonal === -1 && grid[row][col - 1] === -1) return dfs(row + 1, col - 1);

    return -1;
  };

  const result = [];
  for (let i = 0; i < grid[0].length; i++) {
    result.push(dfs(0, i));
  }

  return result;
};
