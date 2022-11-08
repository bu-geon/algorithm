// 2358. Maximum Number of Groups Entering a Competition
var maximumGroups = function (grades) {
	let groups = 0;

	let bunch = 1;
	let leftStudents = grades.length;
	while (leftStudents > 0) {
		if (leftStudents < bunch) {
			return groups;
		}
		leftStudents -= bunch++;
		groups++;
	}

	return groups;
};
