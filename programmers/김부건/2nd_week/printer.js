function solution(priorities, location) {
	const docs = priorities.map((p, i) => ({ priority: p, docNum: i }));
	priorities = priorities.sort((a, b) => b - a);

	let count = 1;
	let pIndex = 0;
	while (true) {
		const { currentDoc, currentPrior } = docs.shift();
		if (isHighestPriority(currentPrior, priorities[pIndex])) {
			if (isTarget(currentDoc.docNum, location)) {
				// if (isHighestPriority(docs[0].priority, priorities[pIndex])) {
				// 	if (isTarget(docs[0].docNum, location)) {
				return count;
			}
			// docs.shift();
			count++;
			pIndex++;
		} else {
			// docs.push(docs.shift());
			docs.push({ currentDoc, currentPrior });
		}
	}
}

const isTarget = (current, target) => {
	return current === target;
};

const isHighestPriority = (current, highest) => {
	return current === highest;
};
