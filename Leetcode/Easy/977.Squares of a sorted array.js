/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	return nums
		.map((value) => value ** 2)
		.sort((first, second) => first - second);
};
