/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
	return words.reduce((count, word) => {
		let idx = 0;
		for (let i = 0; i < word.length; i++) {
			const letter = s.slice(idx).indexOf(word[i]);

			if (letter > -1) {
				idx += letter + 1;
			} else {
				return count;
			}
		}

		return count + 1;
	}, 0);
};

// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number}
//  */
// var numMatchingSubseq = function (s, words) {
// 	let count = 0;
// 	const letterIndex = {};
// 	for (let i = 0; i < s.length; i++) {
// 		const letter = s[i];
// 		letterIndex[letter] = letterIndex[letter] || [];
// 		letterIndex[letter].push(i);
// 	}

// 	for (const word of words) {
// 		let index = -1;
// 		let isSubSequence = true;
// 		for (let i = 0; i < word.length; i++) {
// 			const letter = word[i];
// 			const ll = letterIndex[letter];
// 			if (!ll || ll[ll.length - 1] <= index) {
// 				isSubSequence = false;
// 				break;
// 			}

// 			let left = 0;
// 			let right = ll.length - 1;
// 			while (left < right) {
// 				const mid = parseInt((left + right) / 2);

// 				if (ll[mid] > index) {
// 					right = mid;
// 				} else {
// 					left = mid + 1;
// 				}
// 			}
// 			index = ll[left];
// 		}

// 		isSubSequence && count++;
// 	}

// 	return count;
// };
