/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
	const lastIndex = {};

	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		lastIndex[letter] = i;
	}

	const result = [];
	let maxIndex = lastIndex[s[0]];
	let partion = 0;
	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		maxIndex = Math.max(maxIndex, lastIndex[letter]);
		partion++;

		if (maxIndex === i) {
			result.push(partion);
			partion = 0;
		}
	}

	return result;
};

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// var partitionLabels = function (s) {
// 	const alphabetCounts = {};

// 	for (const letter of s) {
// 		alphabetCounts[letter] = (alphabetCounts[letter] || 0) + 1;
// 	}

// 	let [left, partialLength] = [0, 0];
// 	let visitedAlpha = {};
// 	const result = [];
// 	for (const letter of s) {
// 		if (visitedAlpha[letter] === undefined) {
// 			left += alphabetCounts[letter];
// 			visitedAlpha[letter] = true;
// 		}
// 		alphabetCounts[letter]--;
// 		left--;
// 		partialLength++;

// 		if (left === 0) {
// 			result.push(partialLength);
// 			partialLength = 0;
// 		}
// 	}
// 	return result;
// };

console.log(partitionLabels('ababcbacadefegdehijhklij'));
