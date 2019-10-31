const notLatinSymbolRegexp = /[^\w$]/;

let  closestLatinToCyrrilicCharSimilarity = require('./closest-latin-to-cyrrilic-char-similarity');


module.exports = {
	meta: {
		type:'problem',
		fixable:'code'
	},
	create (context) {
		return {
			Identifier (node) {
				let hasVarNameNonLatinSymbol = notLatinSymbolRegexp.test(node.name);
				if (hasVarNameNonLatinSymbol) {
					context.report({
						node, 
						message: 'Variable name contains non-latin char',
						fix: (fixer) => {
							let member = node.name;

							let letterByLetterObjectMember = member.split('');

							let fixedObjectMemberCharArray = letterByLetterObjectMember.map((char) => {
								return closestLatinToCyrrilicCharSimilarity(char);
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

