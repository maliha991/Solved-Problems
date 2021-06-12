/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let number = new Array(n + 1).fill(0);
	for (let i = 0; i <= n; i++) {
		number[i] = i.toString(2).split("1").length - 1;
	}
	return number;
};
