let flat = require('array-flatten');

const FILE_ADDITIONAL_WORDS = ['service', 'module', 'controller'];

function removeFileExtension (string) {
	const FILE_NAME_WITHOUT_EXTENSION_REGEXP = /([^/]*)\.[^.]*$/;
	return FILE_NAME_WITHOUT_EXTENSION_REGEXP.exec(string)[1];
}

function areArraysEqual(firstArray, secondArray){
	return JSON.stringify(firstArray) === JSON.stringify(secondArray);
}

function split(string, separator){
	return string.split(separator);
}

function toLowerCase(string){
	return string.toLowerCase();
}

// function splitCamelCase (stringToSplit) {
// 	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;
// 	if (stringToSplit instanceof Array) {
// 		let splitted = stringToSplit.map(word => {
// 			return split(word, CAMEL_CASE_REGEXP);
// 		});

// 		return flat(splitted);
// 	}
// 	return splitCamelcase(stringToSplit);
// }

function splitCamelCase(string){
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;
	return split(string, CAMEL_CASE_REGEXP);
}

//splitToWords

function splitSnakeCase (stringToSplit) {
	const SNAKE_CASE_SEPARATOR = '_';
	return split(stringToSplit, SNAKE_CASE_SEPARATOR);
}

function splitKebabCase (stringToSplit) {
	const KEBAB_CASE_SEPARATOR = '-';
	return split(stringToSplit, KEBAB_CASE_SEPARATOR);
}

function deleteExtraWords (words) {
	let wordIsNotFilleAdditionalWord = word => !FILE_ADDITIONAL_WORDS.includes(word)

	let clearArray = words.filter(wordIsNotFilleAdditionalWord);

	return clearArray;
}

function arrayWithWordsFromVariable (string) {
	return splitSnakeCase(string).map(splitCamelCase);
}

function arrayWithWordsFromFileName (string) {
	let clearFilename = removeFileExtension(string);

	let stringSplitedByAllNeedCases = splitSnakeCase(clearFilename)
		.map(splitKebabCase)
		.map(splitCamelCase);


	return stringSplitedByAllNeedCases;
}

function isNameMathcesPath (varName, fileName) {
	let clearSplitedVarName = deleteExtraWords(
		flat(
			arrayWithWordsFromVariable(varName)
		)
	);

	let clearSplitedFileName = deleteExtraWords(
		flat(
			arrayWithWordsFromFileName(fileName)
		)
	);

	let varNameWords = clearSplitedVarName.map(toLowerCase);
	let fileNameWords = clearSplitedFileName.map(toLowerCase);


	let varNameEqualsToFileName = areArraysEqual(varNameWords,fileNameWords);

	if (varNameEqualsToFileName) return false;
	return true;
}

module.exports = {
	meta: {
		type: 'problem'
	},
	create (context) {
		return {
			ImportDeclaration (node) {
				let importVarName = node.specifiers[0].local.name;
				let fileNameSource = node.source.value;
				let varIsNotImported = !node.specifiers[0].imported;
				let varNameEqualsToFileName = areArraysEqual(importVarName,fileNameSource)

				if (varNameEqualsToFileName && varIsNotImported) {
					context.report({
						node,
						message: `import file does not match variable name`
					});
				}
			},
			VariableDeclaration (node) {
				let importVarName = node.declarations[0].id.name;
				let fileNameSource = node.declarations[0].init.arguments[0].value;
				let varNameEqualsToFileName = areArraysEqual(importVarName,fileNameSource)

				if (varNameEqualsToFileName) {
					context.report({
						node,
						message: `import file does not match variable name`
					});
				}
			}
		};
	}
};