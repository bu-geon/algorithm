// 49. Group Anagrams
var groupAnagrams = function (strs) {
	const anagrmas = strs.reduce((anagrams, str) => {
		const sortedWStr = str.split('').sort().join('');

		anagrams[sortedWStr] = anagrams[sortedWStr] || [];
		anagrams[sortedWStr].push(str);

		return anagrams;
	}, {});

	return [...Object.values(anagrmas)];
};
