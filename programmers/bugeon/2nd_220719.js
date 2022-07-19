// 2022 코딩테스트 실전대비 모의고사 1회차 2번
function solution(want, number, discount) {
	let answer = 0;
	const wantObj = want.reduce((acc, cur, i) => {
		acc[cur] = i;

		return acc;
	}, {});

	const periodNumber = Array(number.length).fill(0);
	for (let i = 0; i < 10; i++) {
		if (Object.keys(wantObj).includes(discount[i])) {
			periodNumber[wantObj[discount[i]]]++;
		}
	}

	if (number.every((count, i) => count === periodNumber[i])) answer++;

	for (let i = 10; i < discount.length; i++) {
		if (Object.keys(wantObj).includes(discount[i])) {
			periodNumber[wantObj[discount[i]]]++;
		}

		if (Object.keys(wantObj).includes(discount[i - 10])) {
			periodNumber[wantObj[discount[i - 10]]]--;
		}

		if (number.every((count, i) => count === periodNumber[i])) answer++;
	}

	return answer;
}
