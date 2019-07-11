let checkWord = require('../../check-words');

function noRerelyUsedWords (context) {
	return {
		Identifier (node) {
			checkWord(node, context);
		}
	};
}

module.exports = { noRerelyUsedWords };