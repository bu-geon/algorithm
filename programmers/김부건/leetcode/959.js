var regionsBySlashes = function (grid) {
	const n = grid.length;

	const matrix = new Array(n);

	for (let i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill([false, false, false, false]);
	}

	const dfs = (i, j, k) => {
		matrix[i][j][k] = true;

		if (k === 0) {
			if (matrix[i][j][1] === false && grid[i][j] !== '/') {
				dfs(i, j, 1);
			}
			if (matrix[i][j][3] === false && grid[i][j] !== '\\') {
				dfs(i, j, 3);
			}
			if (i - 1 >= 0 && matrix[i - 1][j][2] === false) {
				dfs(i - 1, j, 2);
			}
		}
		if (k === 1) {
			if (matrix[i][j][0] === false && grid[i][j] !== '/') {
				dfs(i, j, 0);
			}
			if (matrix[i][j][2] === false && grid[i][j] !== '\\') {
				dfs(i, j, 2);
			}
			if (j + 1 < n && matrix[i][j + 1][3] === false) {
				dfs(i, j + 1, 3);
			}
		}
		if (k === 2) {
			if (matrix[i][j][3] === false && grid[i][j] !== '/') {
				dfs(i, j, 3);
			}
			if (matrix[i][j][1] === false && grid[i][j] !== '\\') {
				dfs(i, j, 1);
			}
			if (i + 1 < n && matrix[i + 1][j][0] === false) {
				dfs(i + 1, j, 0);
			}
		}
		if (k === 3) {
			if (matrix[i][j][2] === false && grid[i][j] !== '/') {
				dfs(i, j, 2);
			}
			if (matrix[i][j][0] === false && grid[i][j] !== '\\') {
				dfs(i, j, 0);
			}
			if (j - 1 >= 0 && matrix[i][j - 1][1] === false) {
				dfs(i, j - 1, 1);
			}
		}
	};

	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < 4; k++) {
				if (matrix[i][j][k] === false) {
					dfs(i, j, k);
					count++;
				}
			}
		}
	}

	return count;
};
