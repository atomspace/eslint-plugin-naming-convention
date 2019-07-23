module.exports = {
	meta: {
		messages: {
			onlyEnglishComments: 'Avoid using non latin characters in comments'
		}
	},
	create (context) {
		return {
			Program () {
				let sourceCode = context.getSourceCode();

				for (const comment of sourceCode.getAllComments()) {
					if (/[^\u0020-\u007F\u00A0-\u024F\u1E00-\u1EFF\n\t]/.test(comment.value)) {
						context.report({
							loc: comment.loc,
							messageId: 'onlyEnglishComments'
						});
					}
				}
			}
		};
	}
};