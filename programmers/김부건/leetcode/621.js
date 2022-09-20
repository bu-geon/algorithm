/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
	const countsOfTask = {};
	let [maxCount, maxTask] = [0, undefined];
	for (const task of tasks) {
		countsOfTask[task] = (countsOfTask[task] || 0) + 1;
		maxCount = Math.max(maxCount, countsOfTask[task]);

		if (maxCount === countsOfTask[task]) {
			maxTask = task;
		}
	}

	let totalIdle = (maxCount - 1) * n;
	for (const task of Object.keys(countsOfTask)) {
		if (maxTask === task) {
			continue;
		}

		totalIdle -= Math.min(countsOfTask[task], maxCount - 1);
	}

	return tasks.length + Math.max(0, totalIdle);
};
