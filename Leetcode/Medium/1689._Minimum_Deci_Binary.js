/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
	let max = 0;
	for (let i = 0; i < n.length; i++) {
		if (parseInt(n.charAt(i)) > max) {
			max = parseInt(n.charAt(i));
		}
	}
	return max;
};
