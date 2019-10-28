const notLatinSymbolRegexp = /[^\w$]/;

const CYRILLIC_TO_LATINA_CHAR_OBJECT = require('../../src/utils/cyrillic-to-latina-char-object');


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
						message: 'variable name consist non-latin char',
						fix: (fixer) => {
							let memberToFix = node.name;

							let memberToFixCharArray = memberToFix.split('');

							let fixedObjectMemberCharArray = memberToFixCharArray.map((char) => {

								if (CYRILLIC_TO_LATINA_CHAR_OBJECT[char]){
									return CYRILLIC_TO_LATINA_CHAR_OBJECT[char];
								} else return char;
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

