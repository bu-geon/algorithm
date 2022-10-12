// 334. Increasing Triplet Subssequence
var increasingTriplet = function (nums) {
	let [first, second] = [nums[0], undefined];

	for (const num of nums) {
		if (num > second) return true;

		if (num > first) second = num;
		if (num < first) first = num;
	}

	return false;
};
