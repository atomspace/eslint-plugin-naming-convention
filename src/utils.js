let split = separator => {
	return string => {
		return string.split(separator);
	};
};

function splitCamelCase () {
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;

	return split(CAMEL_CASE_REGEXP);
}

function splitSnakeCase () {
	const SNAKE_CASE_SEPARATOR = '_';

	return split(SNAKE_CASE_SEPARATOR);
}

function splitKebabCase () {
	const KEBAB_CASE_SEPARATOR = '-';

	return split(KEBAB_CASE_SEPARATOR);
}

module.exports = {
	splitWord: word => {
		let splitedWithCamelCase = splitCamelCase(word);

		return splitedWithCamelCase
			.map(splitSnakeCase)
			.map(splitKebabCase);
	}
};