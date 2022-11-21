// 1926. Nearest Exit from Entrance in Maze
const nearestExit = (maze, entrance) => {
  maze[entrance[0]][entrance[1]] = '+';

  const queue = [[entrance[0], entrance[1], 0]];
  while (queue.length > 0) {
    const [r, c, steps] = queue.shift();

    for (const [dr, dc] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const nextR = r + dr,
        nextC = c + dc;
      if ((!maze[nextR] || !maze[nextR][nextC]) && steps > 0) {
        return steps;
      } else if (maze[nextR]?.[nextC] === '.') {
        queue.push([nextR, nextC, steps + 1]);
        maze[nextR][nextC] = '+';
      }
    }
  }

  return -1;
};
