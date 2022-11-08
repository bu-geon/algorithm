// 2049. Count Nodes with Highest Score
var countHighestScoreNodes = function (parents) {
	const binaryTree = { 0: [] };

	for (let i = 1; i < parents.length; i++) {
		const parent = parents[i];
		binaryTree[parent] = binaryTree[parent] || [];
		binaryTree[parent].push(i);
	}

	const dfs = (node, removedNode) => {};

	const scores = [];
	let higestScore = -Infinity;
	for (let i = 0; i < parents.length; i++) {
		const score = dfs(0, i);
		scores.push(score);
		higestScore = Math.max(higestScore, score);
	}

	return scores.filter((score) => score === higestScore).length;
};
