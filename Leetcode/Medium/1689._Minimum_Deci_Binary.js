/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
	let max = n.charAt(0);
	for (let i = 1; i < n.length; i++) {
		if (n.charAt(i) > max) {
			max = n.charAt(i);
		}
	}
	return max;
};
