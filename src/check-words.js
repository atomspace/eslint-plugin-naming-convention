let splitCamelCase = require('split-camelcase');
let concat = require('ramda').concat;

let wordlist = require('../stores/wordlist1.json');

let mostCommonWords = new Set(wordlist);

function wordToLowerCase (word) {
	return word.toLowerCase();
}

function splitIdentifierOnWords (variable) {
	let snaceCaseWords = variable.split('_');

	snaceCaseWords = snaceCaseWords.map(splitCamelCase).reduce(concat, []);
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