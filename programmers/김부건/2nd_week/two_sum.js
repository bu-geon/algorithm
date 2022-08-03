/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const hash = new Map();

	for (let i = 0; i < nums.length; i++) {
		const need = target - nums[i];

		if (hash.has(need)) return [hash.get(need), i];
		// if (hash.get(need) >= 0) return [hash.get(need), i];
		// if (hash.get(need)) return [hash.get(need), i];
		hash.set(nums[i], i);
	}
};

// target : 4
// nums:

// 답이 되는 모든 경우를 return
var twoSum_KW = (nums, target) => {
	const answer = [];

	for (let i = 0; i < nums.length - 2; i++) {
		let subTarget = target - nums[i];

		const hs = new Map();
		for (let j = i + 1; j < nums.length; j++) {
			const need = subTarget - nums[j];

			if (hs.has(need)) answer.push([hs.get(need), j, i]);

			hs.set(nums[j], j);
		}
	}

	return answer;
};
