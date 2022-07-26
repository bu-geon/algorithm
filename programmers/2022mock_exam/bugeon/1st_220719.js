// 2022 코딩테스트 실전대비 모의고사 1회차 1번
const getCountOfNumbers = (arr) => {
	const countOfNumbers = new Array(10).fill(0);

	arr.split('').forEach((el) => countOfNumbers[Number(el)]++);

	return countOfNumbers;
};

const notPair = (arr) => {
	return arr.every((el) => el === 0);
};

const isZero = (arr) => {
	return arr[0] > 0 && arr.slice(1).every((el) => el === 0);
};

function solution(X, Y) {
	const numbersInX = getCountOfNumbers(X);
	const numbersInY = getCountOfNumbers(Y);
	const pairResult = numbersInX.map((count, i) => Math.min(count, numbersInY[i]));

	if (notPair(pairResult)) return '-1';

	if (isZero(pairResult)) return '0';

	return pairResult.reduce((acc, cur, i) => {
		if (cur > 0) return i.toString().repeat(cur) + acc;

		return acc;
	}, '');
}
