/**
 * @param {number} n
 * @return {number}
 */
const twoEggDrop = (n) => {
	const dp = { one: 0, two: 0 };

	let i = 1;
	while (dp.two < n) {
		dp.two = dp.two + dp.one + 1;
		dp.one = i;
		i++;
	}

	return i - 1;
};
