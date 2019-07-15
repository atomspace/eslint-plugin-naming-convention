let concat = require('ramda').concat;

let wordlist1 = require('./1000-most-common-us-english-words.json');
let wordlist2 = require('./most-used-words-in-programming.json');
let wordlist3 = require('./most-common-words-in-english.json');

let mostCommonWords = new Set(wordlist1, wordlist2, wordlist3);

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

function checkRerelyUsedWords (node, context) {
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

module.exports = checkRerelyUsedWords;
