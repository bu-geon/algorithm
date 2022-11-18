// 547. Number of Provinces
var findCircleNum = function (isConnected) {
  const visited = new Set();

  const dfs = (city) => {
    visited.add(city);

    for (let next = 0; next < isConnected.length; next++) {
      if (isConnected[city][next] === 1 && !visited.has(next)) {
        dfs(next);
      }
    }
  };

  let provinces = 0;
  for (const city of isConnected.keys()) {
    if (!visited.has(city)) {
      dfs(city);
      provinces++;
    }
  }

  return provinces;
};
