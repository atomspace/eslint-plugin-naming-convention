let flat = require('array-flatten');
let splitCamelcase = require('split-camelcase');

let synonymsArray = ['service', 'module', 'controller'];

let fileNameNoExtensionRegexp = /([^/]*)\.[^.]*$/;

function fileNameWithoutExtension (string) {
	return fileNameNoExtensionRegexp.exec(string)[1];
}

function splitCamelCase (arg) {
	if (arg instanceof Array) {
		let splitted = arg.map(element => {
			return splitCamelcase(element);
		});

		return flat(splitted);
	}
	return splitCamelcase(arg);
}

function splitSnakeCase (arg) {
	return flat(arg.split('_'));
}

function splitKebabCase (arg) {
	return flat(arg.split('-'));
}

function deleteExtraWords (wordArray) {
	let clearArray = wordArray.filter(word => {
		return !synonymsArray.includes(word);
	});

	return clearArray;
}

function arrayWithWordsFromVariable (string) {
	return splitSnakeCase(string).map(splitCamelCase);
}

function arrayWithWordsFromFileName (string) {
	let clearFilename = fileNameWithoutExtension(string);
	let stringSplitedBySnakeCase = splitSnakeCase(clearFilename);
	let stringSplitedBySnakeAndKebabCase = stringSplitedBySnakeCase.map(splitKebabCase);
	let stringSplitedByAllNeedCases = stringSplitedBySnakeAndKebabCase.map(splitCamelCase);

	return stringSplitedByAllNeedCases;
}

function varAndFileNameNotEqual (varName, fileName) {
	let clearSplitedVarName = deleteExtraWords(flat(arrayWithWordsFromVariable(varName)));
	let clearSplitedFileName = deleteExtraWords(flat(arrayWithWordsFromFileName(fileName)));

	let varNameWords = clearSplitedVarName.map(word => word.toLowerCase());
	let fileNameWords = clearSplitedFileName.map(word => word.toLowerCase());


	let varNameEqualsToFileName = varNameWords.join('') === fileNameWords.join('');

	if (varNameEqualsToFileName) {
		return false;
	}
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
						message: `import file do not match with variable name`
					});
				}
			},
			VariableDeclaration (node) {
				let importVarName = node.declarations[0].id.name;
				let fileNameSource = node.declarations[0].init.arguments[0].value;

				if (varAndFileNameNotEqual(importVarName, fileNameSource)) {
					context.report({
						node,
						message: `import file do not match with variable name`
					});
				}
			}
		};
	}
};