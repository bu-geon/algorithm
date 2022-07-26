/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
	let len = 0;

	let sum = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === '1') {
			if (sum + (1 << len) <= k && len < 30) {
				sum += 1 << len;
			} else {
				continue;
			}
		}

		len++;
	}

	return len;
};
