function solution(topping) {
	let answer = 0;
	const ch = { variety: 0 };
	const brother = topping.reduce(
		(acc, cur) => {
			if (!acc[cur]) {
				acc.variety++;
			}

			acc[cur] = (acc[cur] || 0) + 1;

			return acc;
		},
		{ variety: 0 }
	);

	for (let i = 0; i < topping.length - 1; i++) {
		const currentTopping = topping[i];

		if (!ch[currentTopping]) {
			ch.variety++;
		}

		ch[currentTopping] = (ch[currentTopping] || 0) + 1;

		brother[currentTopping]--;

		if (brother[currentTopping] === 0) {
			brother.variety--;
		}

		if (ch.variety === brother.variety) {
			answer++;
		}
	}

	return answer;
}
