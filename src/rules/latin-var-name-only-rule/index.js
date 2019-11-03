const NOT_LATIN_SYMBOL_REGEXP = /[^\w$]/;

let findClosestLatinToCyrrilicCharSimilarity = require('./closest-latin-to-cyrrilic-char-similarity');


module.exports = {
	meta: {
		type: 'problem',
		fixable: 'code'
	},
	create (context) {
		return {
			Identifier (node) {
				let varNameHasNonLatinSymbol = NOT_LATIN_SYMBOL_REGEXP.test(node.name);

				if (varNameHasNonLatinSymbol) {
					context.report({
						node,
						message: 'Variable name contains non-latin character',
						fix: fixer => {
							let member = node.name;

							let letterByLetterObjectMember = member.split('');

							let fixedObjectMemberCharArray = letterByLetterObjectMember.map(char => {
								return findClosestLatinToCyrrilicCharSimilarity(char);
							});

							let fixedObjectMember = fixedObjectMemberCharArray.join('');
							let fixerObject = fixer.replaceText(node, fixedObjectMember);

							return fixerObject;
						}
					});
				}
			}
		};
	}
};