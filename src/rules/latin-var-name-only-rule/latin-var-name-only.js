const notLatinSymbolRegexp = /[^\w$]/;

const CYRILLIC_TO_LATINA_CHAR = require('../latin-var-name-only-rule/cyrillic-to-latina-char');


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
						message: 'Variable name consist non-latin char',
						fix: (fixer) => {
							let member = node.name;

							let memberCharArray = member.split('');

							let fixedObjectMemberCharArray = memberCharArray.map((char) => {
								return CYRILLIC_TO_LATINA_CHAR[char] || char;
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

