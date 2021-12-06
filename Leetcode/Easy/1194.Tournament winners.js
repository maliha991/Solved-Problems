const winner = (competitions, results) => {
	results.map((result, index) => {
		results[index] = result ? competitions[index][0] : competitions[index][1];
	});

	const totalWin = results.reduce((totalWin, team) => {
		totalWin[team] = (totalWin[team] || 0) + 1;
		return totalWin;
	}, {});

	return Object.keys(totalWin).reduce((prev, next) =>
		totalWin[prev] > totalWin[next] ? prev : next
	);
};

const competitions = [
	["HTML", "C#"],
	["C#", "Python"],
	["Python", "HTML"],
];

const results = [0, 0, 1];

console.log(winner(competitions, results));
