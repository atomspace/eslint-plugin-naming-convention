let flat = require('array-flatten');

function split (separator, string) {
	let result = string.split(separator);

	return result;
}

function splitCamelCase (string) {
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;

	return split(CAMEL_CASE_REGEXP, string);
}


function splitSnakeCase (string) {
	const SNAKE_CASE_SEPARATOR = '_';

	return split(SNAKE_CASE_SEPARATOR, string);
}

function toLowerCase (string) {
	if (typeof string === 'string') return string.toLowerCase();
	return string;
}

module.exports = {
	splitVariable: word => {
		let splitedWithSnakeCase = splitSnakeCase(word);

		let splitedWithCamelCase = splitedWithSnakeCase.map(splitCamelCase);

		let flatted = flat(splitedWithCamelCase);

		let lowerCaseWords = flatted.map(toLowerCase);

		return lowerCaseWords;
	}
};