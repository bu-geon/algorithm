/**
 * @param {number} n
 * @return {number}
 */
const twoEggDrop = (n) => {
	const dp = [{ one: 0, two: 0 }];

	let i = 1;
	while (dp[i - 1].two < n) {
		dp.push({ one: i, two: dp[i - 1].one + dp[i - 1].two + 1 });
		i++;
	}

	return i - 1;
};

console.log(twoEggDrop(100));
