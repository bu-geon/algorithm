// 2146. K Highest Ranked Items Within a Price Range
var highestRankedKItems = function (grid, pricing, start, k) {
  const [low, high] = pricing;
  const items = [];
  const queue = [[...start, 0]];

  while (queue.length > 0) {
    const [row, column, distance] = queue.shift();

    if (!grid[row] || !grid[row][column]) continue;

    const price = grid[row][column];

    if (low <= price && price <= high) {
      items.push([row, column, distance, price]);
    }

    grid[row][column] = 0;

    if (items.length > k && distance + 1 > items.at(-1)[2]) continue;

    queue.push(
      ...[
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ].map(([dr, dc]) => [row + dr, column + dc, distance + 1])
    );
  }

  items.sort(
    ([rowA, columnA, distanceA, priceA], [rowB, columnB, distanceB, priceB]) =>
      distanceA - distanceB || priceA - priceB || rowA - rowB || columnA - columnB
  );

  return items.slice(0, k).map(([row, column, ,]) => [row, column]);
};
