// 1901. Find a Peak Element II
var findPeakGrid = function (mat) {
	const getMaxIndex = (row) => {
		return row.reduce((maxIndex, cur, index) => (cur > row[maxIndex] ? index : maxIndex), 0);
	};

	let [left, right] = [0, mat.length - 1];
	while (left < right) {
		const midRowIndex = parseInt((left + right) / 2);
		let colIndex = getMaxIndex(mat[midRowIndex]);

		if (mat[midRowIndex][colIndex] < mat[midRowIndex + 1][colIndex]) {
			left = midRowIndex + 1;
		} else {
			right = midRowIndex;
		}
	}

	return [left, getMaxIndex(mat[left])];
};
