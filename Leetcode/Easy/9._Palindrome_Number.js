const isPalindrome = function (number) {
	return number === Number(number.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
