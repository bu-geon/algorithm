// function solution(n, roads, sources, destination) {
// 	const answer = new Array(sources.length).fill(-1);

// 	const roadsInfo = {};
// 	for (const [start, end] of roads) {
// 		if (!roadsInfo[start]) {
// 			roadsInfo[start] = [];
// 		}

// 		if (!roadsInfo[end]) {
// 			roadsInfo[end] = [];
// 		}

// 		roadsInfo[start].push(end);
// 		roadsInfo[end].push(start);
// 	}

// 	for (let i = 0; i < sources.length; i++) {
// 		answer[i] = getMinimumTime(sources[i], destination, n, roadsInfo);
// 	}

// 	return answer;
// }

// const getMinimumTime = (current, destination, locations, roadsInfo) => {
// 	const que = new Queue();
// 	que.enqueue([current, 0]);
// 	// const que = [[current, 0]];
// 	const visited = new Array(locations + 1).fill(false);
// 	visited[current] = true;

// 	while (que.length > 0) {
// 		// const [currentLocation, distance] = que.shift();
// 		const [currentLocation, distance] = que.dequeue();

// 		if (currentLocation === destination) {
// 			return distance;
// 		}

// 		if (!roadsInfo[currentLocation]) {
// 			continue;
// 		}

// 		for (const next of roadsInfo[currentLocation]) {
// 			if (!visited[next]) {
// 				visited[next] = true;
// 				// que.push([next, distance + 1]);
// 				que.enqueue([next, distance + 1]);
// 			}
// 		}
// 	}

// 	return -1;
// };

// class Queue {
// 	constructor() {
// 		this._arr = [];
// 		this.front = 0;
// 		this.length = 0;
// 	}

// 	length() {
// 		return this.length;
// 	}

// 	enqueue(item) {
// 		this._arr.push(item);
// 		this.length += 1;
// 	}
// 	dequeue() {
// 		const shift = this._arr[this.front];
// 		this.length -= 1;
// 		this.front += 1;
// 		return shift;
// 	}
// }

class Queue {
	constructor() {
		this._arr = [];
		this.front = 0;
		this.length = 0;
	}

	// length() {
	// 	return this.length;
	// }

	enqueue(item) {
		this._arr.push(item);
		this.length += 1;
	}
	dequeue() {
		const shift = this._arr[this.front];
		this.length -= 1;
		this.front += 1;
		return shift;
	}
}

function solution(n, roads, sources, destination) {
	const answer = new Array(sources.length).fill(-1);

	const roadsInfo = {};
	for (const [start, end] of roads) {
		if (!roadsInfo[start]) {
			roadsInfo[start] = [];
		}

		if (!roadsInfo[end]) {
			roadsInfo[end] = [];
		}

		roadsInfo[start].push(end);
		roadsInfo[end].push(start);
	}

	const starts = sources.reduce((acc, cur, i) => {
		acc[cur] = i;

		return acc;
	}, {});

	const visited = new Array(n + 1).fill(false);
	visited[destination] = true;

	const que = new Queue();
	que.enqueue([destination, 0]);

	while (que.length > 0) {
		const [cur, dis] = que.dequeue();
		console.log(cur, dis);
		if (starts[cur] >= 0) {
			console.log('here', starts[cur]);
			answer[starts[cur]] = dis;
		}

		for (const next of roadsInfo[cur]) {
			if (!visited[next]) {
				visited[next] = true;
				que.enqueue([next, dis + 1]);
				for (let i = 0; i < sources.length; i++) {
					answer[i] = getMinimumTime(sources[i], destination, n, roadsInfo);
				}

				return answer;
			}
		}
	}
}

const getMinimumTime = (current, destination, locations, roadsInfo) => {
	const que = [[current, 0]];
	const visited = new Array(locations + 1).fill(false);
	visited[current] = true;

	while (que.length > 0) {
		const [currentLocation, distance] = que.shift();

		if (currentLocation === destination) {
			return distance;
		}

		if (!roadsInfo[currentLocation]) {
			continue;
		}

		for (const next of roadsInfo[currentLocation]) {
			if (!visited[next]) {
				visited[next] = true;
				que.push([next, distance + 1]);
			}
		}
	}

	return answer;
};

console.log(
	solution(
		5,
		[
			[1, 2],
			[1, 4],
			[2, 4],
			[2, 5],
			[4, 5],
		],
		[1, 3, 5],
		5
	)
);
