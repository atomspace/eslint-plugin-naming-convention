let onlyEnglishComments = require('./only-english-comments-functions').onlyEnglishComments;

module.exports = {
	meta: {
		messages: {
			onlyEnglishComments: 'Avoid using non latin characters in comments'
		}
	},
	create: onlyEnglishComments
};