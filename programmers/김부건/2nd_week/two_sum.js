/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const hash = new Map();

	for (let i = 0; i < nums.length; i++) {
		const need = target - nums[i];

		if (hash.get(need) >= 0) return [hash.get(need), i];
		hash.set(nums[i], i);
	}
};
