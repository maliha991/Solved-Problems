/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
	let number = n.charAt(0);
	for (let i = 1; i < n.length; i++) {
		number = Math.max(number, n.charAt(i));
	}
	return number;
};
