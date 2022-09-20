/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	const unlockedList = new Array(rooms.length).fill(false);
	unlockedList[0] = true;

	const que = [rooms[0]];
	let unlocked = 1;
	while (que.length > 0) {
		que.shift().forEach((key) => {
			if (unlockedList[key] === false) {
				unlocked++;
				unlockedList[key] = true;
				que.push(rooms[key]);
			}
		});

		if (unlocked === rooms.length) return true;
	}

	return false;
};
