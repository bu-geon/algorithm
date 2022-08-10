// 프로그래머스 디스크 컨트롤러
function solution(jobs) {
	let totalTime = 0;

	jobs = jobs.sort((a, b) => a[0] - b[0]);

	const heap = new Heap();
	let jobIndex = 0;
	let time = 0;
	while (jobIndex < jobs.length || heap.tree.length > 1) {
		if (jobIndex < jobs.length && jobs[jobIndex][0] <= time) {
			heap.add(jobs[jobIndex++]);
			continue;
		}

		if (heap.isEmpty()) {
			time = jobs[jobIndex][0];
		} else {
			const [reqTime, workTime] = heap.remove();

			time += workTime;
			totalTime += time - reqTime;
		}
	}

	return Math.floor(totalTime / jobs.length);
}

class Heap {
	constructor() {
		this.tree = [null];
	}

	add(job) {
		this.tree.push(job);
		let currentIndex = this.tree.length - 1;
		let parentIndex = Math.floor(currentIndex / 2);

		while (currentIndex > 1 && this.tree[currentIndex][1] < this.tree[parentIndex][1]) {
			[this.tree[currentIndex], this.tree[parentIndex]] = [
				this.tree[parentIndex],
				this.tree[currentIndex],
			];
			currentIndex = parentIndex;
			parentIndex = Math.floor(currentIndex / 2);
		}
	}

	remove() {
		const job = this.tree[1];
		if (this.tree.length === 2) {
			this.tree = [null];
			return job;
		}

		this.tree[1] = this.tree.pop();
		let currentIndex = 1;
		let leftChild = currentIndex * 2;
		let rightChild = currentIndex * 2 + 1;

		if (!this.tree[leftChild]) return job;
		if (!this.tree[rightChild]) {
			if (this.tree[leftChild][1] < this.tree[currentIndex][1]) {
				[this.tree[leftChild], this.tree[currentIndex]] = [
					this.tree[currentIndex],
					this.tree[leftChild],
				];
			}
			return job;
		}

		while (
			this.tree[currentIndex][1] > Math.min(this.tree[leftChild][1], this.tree[rightChild][1])
		) {
			const minIndex = this.tree[leftChild][1] < this.tree[rightChild][1] ? leftChild : rightChild;
			[this.tree[currentIndex], this.tree[minIndex]] = [
				this.tree[minIndex],
				this.tree[currentIndex],
			];

			currentIndex = minIndex;
			leftChild = currentIndex * 2;
			rightChild = currentIndex * 2 + 1;
		}

		return job;
	}

	isEmpty() {
		return this.tree.length === 1;
	}
}

console.log(
	solution(
		[
			[0, 3],
			[1, 9],
			[2, 6],
		],
		9
	)
);
