/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
	let number = [];
	let counter = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i === n) {
			counter = 1;
		}
		number[counter] = nums[i];
		counter = counter + 2;
	}
	return number;
};
