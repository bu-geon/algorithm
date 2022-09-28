// 2405. Optimal Partition of String
var partitionString = function (s) {
	let count = 1;

	let letterMap = new Map();
	for (const letter of s) {
		if (letterMap.has(letter)) {
			letterMap = new Map();
			count++;
		}

		letterMap.set(letter, true);
	}

	return count;
};
