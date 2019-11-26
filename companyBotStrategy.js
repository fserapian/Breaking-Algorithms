/************ COMPANY BOT STRATEGY ************/
/*
	All four trainers have solved the task correctly, so the answer is (3 + 6 + 4 + 5) = 4.5.
	Each CodeFights Company Bot is trained by engineers from that specific company.
	The way it works is that a representative group of engineers from each company is identified
	as trainers before the bot goes live, and they Codefight against the bot during a training 
	phase. The current training algorithm is definitely more complex, but let's assume it works
	this way:

	For each trainer we collect two pieces of information per task [answerTime, correctness],
	where correctness is 1 if the answer was correct, -1 if the answer was wrong and 0 if
	no answer was given. In this case the bot's correct answer time for a given task would be 
	the average of the answer times from the trainers who answered correctly.
	Given all of the training information for a specific task, calculate the bot's answer time.

	Examples:
	For trainingData = [[3, 1], [6, 1], [4, 1], [5, 1]],
		companyBotStrategy(trainingData) = 4.5

	For trainingData = [[4, 1], [4, -1], [0, 0], [6, 1]],
		companyBotStrategy(trainingData) = 5
	Only the first and the fourth trainers (1-based) submitted correct solutions,
	so the answer is (4 + 6) / 2 = 5

	For trainingData = [[4, -1], [0, 0], [5, -1]],
		companyBotStrategy(trainingData) = 0
	No correct answers were given for the task.
*/


function companyBotStrategy(data) {
	const newArr = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i][1] === 1) {
			newArr.push(data[i][0]);
		}
	}
	return newArr.reduce((total, num) => (total + num), 0) / newArr.length || 0;
}

function companyBotStrategy2(data) {
	let answerTime = 0;
	let correctness = 0;
	data.forEach(d => {
		if (d[1] === 1) {
			answerTime += d[0];
			correctness++;
		}
	});
	return answerTime / correctness || 0;
}

const arr = [[3, 1], [6, 1], [4, 1], [5, 1]];
console.log(companyBotStrategy(arr));
console.log(companyBotStrategy2(arr));



