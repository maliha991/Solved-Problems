/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	n = n.toString().split("");
	let prod = n.reduce((prev, next) => {
		return prev * next;
	});
	let sum = n.reduce((prev, next) => {
		return parseInt(prev) + parseInt(next);
	});
	return prod - sum;
};
