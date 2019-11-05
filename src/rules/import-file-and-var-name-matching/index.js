let flat = require('array-flatten');
let splitCamelcase = require('split-camelcase');

const FILE_ADDITIONAL_WORDS = ['service', 'module', 'controller'];

function fileNameWithoutExtension (string) {
	const FILE_NAME_WITHOUT_EXTENSION_REGEXP = /([^/]*)\.[^.]*$/;
	return FILE_NAME_WITHOUT_EXTENSION_REGEXP.exec(string)[1];
}

function join(words, separator){
	return words.join(separator);
}

function splitWithoutSubArrays(stringToSplit, separator){
	return flat(stringToSplit.split(separator));
}

function toLowerCase(stringToLowerCase){
	return stringToLowerCase.toLowerCase();
}

function splitCamelCase (stringToSplit) {
	const CAMEL_CASE_REGEXP = /(?=[A-Z])/g;
	if (stringToSplit instanceof Array) {
		let splitted = stringToSplit.map(word => {
			return splitWithoutSubArrays(word, CAMEL_CASE_REGEXP);
		});

		return flat(splitted);
	}
	return splitCamelcase(stringToSplit);
}

function splitSnakeCase (stringToSplit) {
	const SNAKE_CASE_SEPARATOR = '_';
	return splitWithoutSubArrays(stringToSplit, SNAKE_CASE_SEPARATOR);
}

function splitKebabCase (stringToSplit) {
	const KEBAB_CASE_SEPARATOR = '-';
	return splitWithoutSubArrays(stringToSplit, KEBAB_CASE_SEPARATOR);
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
	let clearFilename = fileNameWithoutExtension(string);

	let stringSplitedByAllNeedCases = splitSnakeCase(clearFilename)
		.map(splitKebabCase)
		.map(splitCamelCase);


	return stringSplitedByAllNeedCases;
}

function varAndFileNameNotEqual (varName, fileName) {
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


	let varNameEqualsToFileName = join(varNameWords, '') === join(fileNameWords, '');

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


				if (varAndFileNameNotEqual(importVarName, fileNameSource) && varIsNotImported) {
					context.report({
						node,
						message: `import file does not match with variable name`
					});
				}
			},
			VariableDeclaration (node) {
				let importVarName = node.declarations[0].id.name;
				let fileNameSource = node.declarations[0].init.arguments[0].value;

				if (varAndFileNameNotEqual(importVarName, fileNameSource)) {
					context.report({
						node,
						message: `import file does not match with variable name`
					});
				}
			}
		};
	}
};