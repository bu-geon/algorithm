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

console.log(
	longestSubsequence(
		'111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101',
		11713332
	)
);
