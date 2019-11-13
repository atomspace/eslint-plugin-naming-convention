const SPECIAL_SYMBOLS_REGEXP = /[!#%&()*+/=@^_]/;

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/atomspace/eslint-plugin-naming-convention/blob/master/docs/rules/no-special-in-object-members.md'
		},
		messages: {
			errorMessage: `The object member has special symbols: {{ listOfSpecialSymbolsInObjectMember }}.`
		}
	},
	create (context) {
		return {
			VariableDeclaration (node) {
				let objectProperties = node.declarations[0].init.properties;
				
				
				if (!objectProperties) return;

				objectProperties.forEach(property => {
					let objectMemeber = property.key.value;
					let specialSymbolInObjectMember = objectMemeber.match(SPECIAL_SYMBOLS_REGEXP);


					if (specialSymbolInObjectMember) {
						let listOfSpecialSymbolsInObjectMember = specialSymbolInObjectMember.join('');

						context.report({
							node,
							messageId: 'errorMessage',
							data: {
								listOfSpecialSymbolsInObjectMember
							}
						});
					}
				});
				
			}
		};
	}
};