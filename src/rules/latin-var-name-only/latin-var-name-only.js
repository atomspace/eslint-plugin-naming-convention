const NOT_LATIN_SYMBOL_REGEXP = /[^\w$]/;

let findClosestLatinToCyrrilicCharSimilarity = require('./closest-latin-to-cyrrilic-char-similarity');


module.exports = {
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/atomspace/eslint-plugin-naming-convention/blob/master/docs/rules/latin-var-name-only.md'
		},
		fixable: 'code'
	},
	create (context) {
		return {
			Identifier (node) {
				let varNameHasNonLatinSymbol = NOT_LATIN_SYMBOL_REGEXP.test(node.name);

				if (varNameHasNonLatinSymbol) {
					context.report({
						node,
						message: 'Variable name contains non-latin character.',
						fix: fixer => {
							let member = node.name;

							let letterByLetterObjectMember = member.split('');

							let fixedObjectMemberCharArray = letterByLetterObjectMember.map(findClosestLatinToCyrrilicCharSimilarity);

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