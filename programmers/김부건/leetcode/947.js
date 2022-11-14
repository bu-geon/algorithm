// 947. Most Stones Removed with Same Row or Column
var removeStones = function (stones) {
  const visited = new Array(stones.length).fill(false);
  const xMap = new Map(),
    yMap = new Map();

  for (let i = 0; i < stones.length; i++) {
    let [x, y] = stones[i];

    xMap.get(x)?.push(i) || xMap.set(x, [i]);
    yMap.get(y)?.push(i) || yMap.set(y, [i]);
  }

  const dfs = (i) => {
    if (visited[i]) return;

    visited[i] = true;
    let [x, y] = stones[i];

    for (const next of xMap.get(x)) dfs(next);
    for (const next of yMap.get(y)) dfs(next);
  };

  let remainingStones = 0;

  for (let i = 0; i < stones.length; i++) {
    if (!visited[i]) {
      remainingStones++;
      dfs(i);
    }
  }

  return stones.length - remainingStones;
};
