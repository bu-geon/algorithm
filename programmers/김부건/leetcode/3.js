/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	const charIndex = new Map();

	let longest = 0;
	let left = 0;
	for (let i = 0; i < s.length; i++) {
		if (charIndex.get(s[i]) >= left) {
			left = charIndex.get(s[i]) + 1;
		}
		charIndex.set(s[i], i);

		const substring = i - left + 1;
		longest = Math.max(longest, substring);
	}

	return longest;
};
