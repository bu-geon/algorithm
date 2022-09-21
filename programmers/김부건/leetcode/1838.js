// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxFrequency = function (nums, k) {
// 	nums.sort((a, b) => a - b);

// 	let maxFrequency = 1;
// 	let left = 0;
// 	let prefixSum = 0;
// 	for (let right = 0; right < nums.length; right++) {
// 		prefixSum += nums[right];

// 		let frequency = right - left + 1;
// 		while (nums[right] * frequency > prefixSum + k) {
// 			prefixSum -= nums[left++];
// 			frequency--;
// 		}

// 		maxFrequency = Math.max(maxFrequency, frequency);
// 	}

// 	return maxFrequency;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
	const prefixSumList = nums
		.sort((a, b) => a - b)
		.reduce((acc, cur, idx) => {
			acc.push(idx === 0 ? cur : acc[idx - 1] + cur);
			return acc;
		}, []);

	let maxFrequency = 1;
	for (let right = nums.length - 1; right >= 0; right--) {
		let start = 0;
		let end = right;
		while (start < end) {
			let mid = parseInt((start + end) / 2);
			const prefixSum = prefixSumList[right] - (prefixSumList[mid - 1] || 0);
			if (nums[right] * (right - mid + 1) > prefixSum + k) {
				start = mid + 1;
			} else {
				end = mid;
			}
		}
		maxFrequency = Math.max(maxFrequency, right - start + 1);
	}

	return maxFrequency;
};
