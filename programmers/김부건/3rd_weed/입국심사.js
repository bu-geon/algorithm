// 프로그래머스 입국심사
function solution(n, times) {
	let left = 0;
	// let right = Number.MAX_SAFE_INTEGER;
	let right = n * Math.max(...times);
	while (left < right) {
		const mid = parseInt((left + right) / 2);
		const done = times.reduce((sum, t) => sum + parseInt(mid / t), 0);

		if (done < n) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return right;
}
