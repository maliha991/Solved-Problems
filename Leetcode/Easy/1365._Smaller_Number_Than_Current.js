/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
	let number = new Array(nums.length).fill(0);
	nums.forEach((value, i) => {
		for (let j = 0; j < nums.length; j++) {
			if (i !== j && nums[j] < value) {
				number[i] = number[i] + 1;
			}
		}
	});
	return number;
};
