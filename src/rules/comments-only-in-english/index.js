let CommentsOnlyInEnglish = require('./comments-only-in-english-functions').CommentsOnlyInEnglish;

module.exports = {
	meta: {
		messages: {
			CommentsOnlyInEnglish: 'Avoid using non latin characters in comments'
		}
	},
	create: CommentsOnlyInEnglish
};
