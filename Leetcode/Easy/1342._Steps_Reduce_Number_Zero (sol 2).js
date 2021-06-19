/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
	for (var steps = 0; num > 0; steps++) num % 2 ? num-- : (num /= 2);
	return steps;
};
