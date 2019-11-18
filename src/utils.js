function split (separator, string) {
	return string.split(separator);
}

function splitCamelCase (string) {
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;

	return split(CAMEL_CASE_REGEXP, string);
}

function splitSnakeCase (string) {
	const SNAKE_CASE_SEPARATOR = '_';

	return split(SNAKE_CASE_SEPARATOR, string);
}

function splitKebabCase (string) {
	const KEBAB_CASE_SEPARATOR = '-';

	return split(KEBAB_CASE_SEPARATOR, string);
}

function toLowerCase (string) {
	return string.toLowerCase();
}

module.exports = {
	splitWord: word => {
		let splitedWithCamelCase = splitCamelCase(word);

		console.log(splitedWithCamelCase);
		return splitedWithCamelCase
			// .map(splitSnakeCase)
			.map(splitKebabCase)
			.map(toLowerCase);
	}
};