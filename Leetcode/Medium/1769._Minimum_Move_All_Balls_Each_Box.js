/**
 * @param {string} boxes
 * @return {number[]}
 */

const minOperations = function (boxes) {
	return boxes.split("").map((box, ansIndex, boxArr) => {
		return boxArr.reduce(
			(sum, value, index) =>
				(sum += value > 0 ? Math.abs(index - ansIndex) : 0),
			0
		);
	});
};

console.log(minOperations("001011"));
