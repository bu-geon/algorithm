function solution(number) {
	let answer = 0;

	for (let i = 0; i < number.length; i++) {
		const hash = new Map();
		for (let j = i + 1; j < number.length; j++) {
			const need = -1 * (number[i] + number[j]);

			if (hash.has(need)) {
				answer += hash.get(need);
			}
			hash.set(number[j], (hash.get(number[j]) || 0) + 1);
		}
	}

	return answer;
}
