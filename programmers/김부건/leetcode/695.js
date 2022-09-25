/**
 * @param {number[][]} grid
 * @return {number}
 */
// var maxAreaOfIsland = function (grid) {
// 	let maxArea = 0;
// 	const directions = [
// 		[-1, 0],
// 		[1, 0],
// 		[0, -1],
// 		[0, 1],
// 	];

// 	const que = [];
// 	for (let i = 0; i < grid.length; i++) {
// 		for (let j = 0; j < grid[0].length; j++) {
// 			if (grid[i][j] === 1) {
// 				que.push([i, j]);
// 				grid[i][j] = 0;
// 			}

// 			let area = 0;
// 			while (que.length > 0) {
// 				const [currentR, currentC] = que.pop();
// 				area++;

// 				for (const [dr, dc] of directions) {
// 					const [nextR, nextC] = [currentR + dr, currentC + dc];

// 					if (
// 						nextR >= 0 &&
// 						nextR < grid.length &&
// 						nextC >= 0 &&
// 						nextC < grid[0].length &&
// 						grid[nextR][nextC] === 1
// 					) {
// 						que.push([nextR, nextC]);
// 						grid[nextR][nextC] = 0;
// 					}
// 				}
// 			}

// 			maxArea = Math.max(maxArea, area);
// 		}
// 	}

// 	return maxArea;
// };

var maxAreaOfIsland = function (grid) {
	let maxArea = 0;

	const dfs = (r, c) => {
		if (!(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1)) {
			return 0;
		}
		grid[r][c] = 0;

		const up = dfs(r - 1, c);
		const down = dfs(r + 1, c);
		const left = dfs(r, c - 1);
		const right = dfs(r, c + 1);

		return 1 + up + down + left + right;
	};

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				maxArea = Math.max(maxArea, dfs(i, j));
			}
		}
	}

	return maxArea;
};
