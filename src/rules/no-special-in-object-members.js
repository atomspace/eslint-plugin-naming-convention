const SPECIAL_SYMBOLS_REGEXP = /[!#%&()*+/=@^_]/;

module.exports = {
	meta: {
		type: 'problem',
		messages: {
			errorMessage: `The object member has special symbols: {{ listOfSpecialSymbolsInObjectMember }}`
		}
	},
	create(context) {
		return {
			VariableDeclaration(node) {
				let objectProperties = node.declarations[0].init.properties;

				objectProperties.forEach(property => {

					let objectMemeber = property.key.value;
					let specialSymbolInObjectMember = objectMemeber.match(SPECIAL_SYMBOLS_REGEXP);


					if (specialSymbolInObjectMember) {
						let listOfSpecialSymbolsInObjectMember = specialSymbolInObjectMember.join('');
						context.report({
							node: node,
							messageId: 'errorMessage',
							data: {
								listOfSpecialSymbolsInObjectMember: listOfSpecialSymbolsInObjectMember
							}
						});
					}
				});
			}
		};
	}
};