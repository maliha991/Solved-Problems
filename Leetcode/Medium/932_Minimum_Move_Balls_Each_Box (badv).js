/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
	let number = [];
	for (let i = 0; i < boxes.length; i++) {
		number[i] = 0;
		for (let j = 0; j < boxes.length; j++) {
			if (boxes.charAt(j) == 1) {
				number[i] = number[i] + Math.abs(i - j);
			}
		}
	}
	return number;
};
