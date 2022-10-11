class MyCalendarThree {
	constructor() {
		this.bookings = {};
	}

	book(start, end) {
		this.bookings[start] = (this.bookings[start] || 0) + 1;
		this.bookings[end] = (this.bookings[end] || 0) - 1;

		let [maxBooking, intersect] = [-Infinity, 0];

		for (const key in this.bookings) {
			intersect += this.bookings[key];
			maxBooking = Math.max(maxBooking, intersect);
		}

		return maxBooking;
	}
}

// 5 10 15 20 25 30 35 40 45 50 55 60
// ------
// ---
//   --------
//                            -------
//   -------------------
//             ------------------
