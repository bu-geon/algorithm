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

	for (let i = 0; i < sources.length; i++) {
		answer[i] = getMinimumTime(sources[i], destination, n, roadsInfo);
	}

	return answer;
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

	return -1;
};
