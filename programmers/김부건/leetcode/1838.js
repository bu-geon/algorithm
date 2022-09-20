/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
	nums.sort((a, b) => a - b);

	let maxFrequency = 1;
	let left = 0;
	let prefixSum = 0;
	for (let right = 0; right < nums.length; right++) {
		prefixSum += nums[right];

		let frequency = right - left + 1;
		while (nums[right] * frequency > prefixSum + k) {
			prefixSum -= nums[left++];
			frequency--;
		}

		maxFrequency = Math.max(maxFrequency, frequency);
	}

	return maxFrequency;
};
