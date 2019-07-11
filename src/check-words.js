let concat = require('ramda').concat;

let wordlist1 = require('../stores/wordlist1.json');
let wordlist2 = require('../stores/most-used-words-in-programmong.json');

let mostCommonWords = new Set(wordlist1, wordlist2);

function wordToLowerCase (word) {
	return word.toLowerCase();
}

function ultimateStringSplitter (string) {
	let splittedString = string.replace(/([A-Z][a-z])/g, function (coincidence) {
		return ` ${coincidence}`;
	});

	return splittedString = splittedString.replace(/\d+/g, '').split(' ');
}

function splitIdentifierOnWords (variable) {
	let snaceCaseWords = variable.split('_');

	snaceCaseWords = snaceCaseWords.map(ultimateStringSplitter).reduce(concat, []);
	return snaceCaseWords.map(wordToLowerCase);
}

function isNotPopularWord (word) {
	return !mostCommonWords.has(word);
}

function checkWords (node, context) {
	let words = splitIdentifierOnWords(node.name);

	let errorExists = words.some(isNotPopularWord);

	if (errorExists) {
		context.report({
			node,
			messageId: 'noRerelyUsedWords',
			data: {
				name: node.name
			}
		});
	}
}

module.exports = checkWords;
