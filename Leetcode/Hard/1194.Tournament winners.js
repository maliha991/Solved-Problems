const winner = (competitions, results) => {
	newResults = [...results];
	newResults.forEach((result, index) => {
		newResults[index] = result
			? competitions[index][0]
			: competitions[index][1];
	});

	const totalWin = newResults.reduce((totalWin, team) => {
		totalWin[team] = (totalWin[team] || 0) + 1;
		return totalWin;
	}, {});

	return Object.keys(totalWin).reduce((result, item) =>
		totalWin[result] > totalWin[item] ? result : item
	);
};

const competitions = [
	["HTML", "C#"],
	["C#", "Python"],
	["Python", "HTML"],
];

const results = [0, 0, 1];

console.log(winner(competitions, results));
