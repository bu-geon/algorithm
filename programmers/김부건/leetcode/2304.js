// 2304. Minimum Path Cost in a Grid
var minPathCost = function (grid, moveCost) {
  const totalCosts = Array.from(new Array(grid.length), () =>
    new Array(grid[0].length).fill(Infinity)
  );
  const lastRow = grid.length - 1;

  totalCosts[0] = [...grid[0]];

  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      for (let k = 0; k < moveCost[0].length; k++) {
        const currentNode = grid[i][k];
        const previousNode = grid[i - 1][j];
        totalCosts[i][k] = Math.min(
          totalCosts[i][k],
          currentNode + moveCost[previousNode][k] + totalCosts[i - 1][j]
        );
      }
    }
  }

  return Math.min(...totalCosts[lastRow]);
};
