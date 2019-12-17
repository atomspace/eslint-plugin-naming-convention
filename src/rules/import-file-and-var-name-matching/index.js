let path = require('path');

let flat = require('array-flatten');

function removeFileExtensionAndSufix (string) {
	let fileNameWithoutExtension = path.parse(string).name;
	let fileNameWithoutExtensionAndSufix = splitDots(fileNameWithoutExtension)[0];
	return fileNameWithoutExtensionAndSufix;
}

function toLowerCase (string) {
	if (typeof string === 'string') return string.toLowerCase();
	return string;
}

function split (string, separator) {
	return string.split(separator);
}

function splitDots (string) {
	const SEPARATOR = '.';

	return string.split(SEPARATOR);
}

function splitCamelCase (string) {
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;

	return split(string, CAMEL_CASE_REGEXP);
}

function splitSnakeCase (stringToSplit) {
	const SNAKE_CASE_SEPARATOR = '_';

	return split(stringToSplit, SNAKE_CASE_SEPARATOR);
}

function splitKebabCase (stringToSplit) {
	const KEBAB_CASE_SEPARATOR = '-';

	return split(stringToSplit, KEBAB_CASE_SEPARATOR);
}

function isFileNameStartsWithNumber (pathToFile) {
	let fileName = removeFileExtensionAndSufix(pathToFile);
	const FILE_NAME_STARTS_FROM_NUMBER_REGEXP = /^\d/;

	if (FILE_NAME_STARTS_FROM_NUMBER_REGEXP.test(fileName)) return true;
	return false;
}

function divideVariableNameToWords (string) {
	let stringSplitedBySnakeCase = splitSnakeCase(string);
	let stringSplitedByAllNeedCases = flat(stringSplitedBySnakeCase.map(splitCamelCase));

	let lowercaseStringSplitedByAllNeedCases = stringSplitedByAllNeedCases.map(toLowerCase);

	return lowercaseStringSplitedByAllNeedCases;
}

function divideFileNameToWords (string) {
	let clearFilename = removeFileExtensionAndSufix(string);

	let stringSplitedByDots = flat(splitDots(clearFilename));
	let stringSplitedBySnakeCase = flat(stringSplitedByDots.map(splitSnakeCase));
	let stringSplitedByCamelCase = flat(stringSplitedBySnakeCase.map(splitCamelCase));
	let stringSplitedByAllNeedCases = flat(stringSplitedByCamelCase.map(splitKebabCase));

	let lowercaseStringSplitedByAllNeedCases = stringSplitedByAllNeedCases.map(toLowerCase);

	return lowercaseStringSplitedByAllNeedCases;
}

function areFileNameAndVariableNameEqual (fileName, variableName) {
	let wordsFromFileName = divideFileNameToWords(fileName);
	let wordsFromVariableName = divideVariableNameToWords(variableName);

	const FILE_ADDITIONAL_WORDS = ['service', 'module', 'controller'];
	let wordsToCompareWithVariable = new Set([...wordsFromFileName, ...FILE_ADDITIONAL_WORDS]);
	let fileNameAndVariableNameEqual = wordsFromVariableName.every(word => wordsToCompareWithVariable.has(word));

	return fileNameAndVariableNameEqual;
}

module.exports = {
	meta: {
		type: 'problem'
	},
	create (context) {
		return {
			ImportDeclaration (node) {
				try {
					let importVarName = node.specifiers[0].local.name;
					let fileNameSource = node.source.value;
					let varIsNotImported = !node.specifiers[0].imported;
					let varNameEqualsToFileName = areFileNameAndVariableNameEqual(fileNameSource, importVarName);
					let fileNameStartsWithNumber = isFileNameStartsWithNumber(fileNameSource);

					if (!varNameEqualsToFileName && varIsNotImported && !fileNameStartsWithNumber) {
						context.report({
							node,
							message: `variable name does not match import file`
						});
					}
				}
				catch (error) {return;}
			},
			VariableDeclaration (node) {
				try {
					const FUNCTION_REQUIRE_NAME = 'require';
					let functionIsRequire = node.declarations[0].init.callee.name === FUNCTION_REQUIRE_NAME;
					let importVarName = node.declarations[0].id.name;
					let fileNameSource = node.declarations[0].init.arguments[0].value;
					let varNameEqualsToFileName = areFileNameAndVariableNameEqual(fileNameSource, importVarName);
					let fileNameStartsWithNumber = isFileNameStartsWithNumber(fileNameSource);


					if (!varNameEqualsToFileName && functionIsRequire && !fileNameStartsWithNumber) {
						context.report({
							node,
							message: `variable name does not match import file`
						});
					}
				}
				catch (error) { return;}
			}
		};
	}
};