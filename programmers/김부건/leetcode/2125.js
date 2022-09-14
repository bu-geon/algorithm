/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
	let beams = 0;

	let previousSecurityDevices = 0;
	for (const row of bank) {
		const currentSecurityDevices = row
			.split('')
			.reduce((sum, cur) => sum + (cur === '1' ? 1 : 0), 0);

		beams += previousSecurityDevices * currentSecurityDevices;
		if (currentSecurityDevices !== 0) {
			previousSecurityDevices = currentSecurityDevices;
		}
	}

	return beams;
};
