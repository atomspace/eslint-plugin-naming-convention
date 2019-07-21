let checkRerelyUsedWords = require('./check-rerely-used-words');

module.exports = {
	meta: {
		messages: {
			noRerelyUsedWords: 'Avoid using rerely used words in identifiers'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				let isRerelyUsedWord = checkRerelyUsedWords(node.name);

				if (isRerelyUsedWord) {
					context.report({
						node,
						messageId: 'noRerelyUsedWords',
						data: {
							name: node.name
						}
					});
				}
			}
		};
	}
};