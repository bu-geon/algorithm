/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
	let maxLength = 0;

	const dfs = (dept, str) => {
		if (str.length !== new Set(str.split('')).size || dept === arr.length + 1) {
			return;
		}

		maxLength = Math.max(maxLength, str.length);

		dfs(dept + 1, str);
		dfs(dept + 1, str + arr[dept]);
	};

	dfs(0, '');

	return maxLength;
};
