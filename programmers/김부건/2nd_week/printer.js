function solution(priorities, location) {
	const docs = priorities.map((p, i) => ({ priority: p, docNum: i }));
	priorities = priorities.sort((a, b) => b - a);

	let count = 1;
	let pIndex = 0;
	while (true) {
		if (isHighestPriority(docs[0].priority, priorities[pIndex])) {
			if (isTarget(docs[0].docNum, location)) {
				return count;
			}
			docs.shift();
			count++;
			pIndex++;
		} else {
			docs.push(docs.shift());
		}
	}
}

const isTarget = (current, target) => {
	return current === target;
};

const isHighestPriority = (current, highest) => {
	return current === highest;
};
