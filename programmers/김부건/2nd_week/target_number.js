function solution(numbers, target) {
	const dfs = (depth, result) => {
		if (depth === numbers.length) {
			if (result === target) {
				return 1;
			}
			return 0;
		}

		return dfs(depth + 1, result + numbers[depth]) + dfs(depth + 1, result - numbers[depth]);
	};

	return dfs(0, 0);
}
