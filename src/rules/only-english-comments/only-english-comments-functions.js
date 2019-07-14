let checkComments = require('../../check-comments');

function onlyEnglishComments (context) {
	return {
		Program () {
			checkComments(context);
		}
	};
}

module.exports = { onlyEnglishComments };