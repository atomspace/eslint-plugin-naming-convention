let noRerelyUsedWords = require('./no-rerely-used-words-functions').noRerelyUsedWords;

module.exports = {
	meta: {
		messages: {
			noRerelyUsedWords: 'Avoid using rerely used words in identifiers'
		}
	},
	create: noRerelyUsedWords
};
