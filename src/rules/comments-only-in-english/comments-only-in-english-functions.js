let checkComments = require('../../check-comments');

// const patterns = {
// 	Block: /^\s*(eslint(?:-disable|-enable|-env)?|exported|globals?)(?:\s|$)/u,
// 	Line: /^\s*(eslint-disable(?:-next)?-line)(?:\s|$)/u
// };

function CommentsOnlyInEnglish (context) {
	const sourceCode = context.getSourceCode();
	const allowed = new Set(
		(context.options[0] && context.options[0].allow) || []
	);

	return {
		Program () {
			for (const comment of sourceCode.getAllComments()) {
				// const pattern = patterns[comment.type];
				// if (pattern === null) {
				// 	continue;
				// }
				// const mele = pattern.exec(comment.value);

				console.log(comment.value);

				// if (mele !== null && !allowed.has(mele[1])) {
				if (/[^\u0020-\u007F\u00A0-\u024F\u1E00-\u1EFF]/.test(comment.value)) {
					context.report({
						loc: comment.loc,
						messageId: 'CommentsOnlyInEnglish'
					});
				}
			}
		}
	};
}

module.exports = { CommentsOnlyInEnglish };