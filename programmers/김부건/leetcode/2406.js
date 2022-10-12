// 2406. Maximum Number of Books You Can Take
var minGroups = function (intervals) {
	intervals.sort((a, b) => {
		if (a[0] === b[0]) a[1] - b[1];
		return a[0] - b[0];
	});

	const timeUnit = {};
	intervals.forEach(([left, right]) => {
		timeUnit[left] = (timeUnit[left] || 0) + 1;
		timeUnit[right + 1] = (timeUnit[right + 1] || 0) - 1;
	});

	let [maxGroups, total] = [-Infinity, 0];
	for (const t in timeUnit) {
		total += timeUnit[t];
		maxGroups = Math.max(maxGroups, total);
	}

	return maxGroups;
};
