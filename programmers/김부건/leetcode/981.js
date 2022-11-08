var TimeMap = function () {
	this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
	this.map.has(key) || this.map.set(key, []);
	this.map.get(key)[timestamp] = value;

	// 이분탐색
	// this.map.has(key) || this.map.set(key, []);
	// this.map.get(key).push({timestamp, value});
	// this.map.get(key).sort((a, b) => a.timestamp - b.timestamp);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
	while (timestamp > 0) {
		if (this.map.get(key)?.[timestamp]) return this.map.get(key)[timestamp];
		timestamp--;
	}

	return '';

	// 이분탐색
	// if (!this.map.get(key)) return '';
	// if (this.map.get(key)[timestamp]) return this.map.get(key)[timestamp];

	// let left = 0;
	// let right = this.map.get(key).length;

	// while (left <= right) {
	//   const mid = parseInt((left + right) / 2);

	//   if () {

	//   }
	//   else {

	//   }
	// }

	// return '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
