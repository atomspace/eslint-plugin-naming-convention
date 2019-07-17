let concat = require('ramda').concat;

let mostCommonUsEnglishWords = require('./1000-most-common-us-english-words.json');
let mostUsedWordsInProgramming = require('./most-used-words-in-programming.json');
let mostCommonWordsInEnglish = require('./most-common-words-in-english.json');

let wordsData = concat(mostCommonUsEnglishWords, mostCommonWordsInEnglish, mostUsedWordsInProgramming);

let mostCommonWords = new Set(wordsData);

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

function checkRerelyUsedWords (string) {
	let words = splitIdentifierOnWords(string);

	let isRerelyUsedWord = words.some(isNotPopularWord);

	return isRerelyUsedWord;
}

module.exports = checkRerelyUsedWords;
