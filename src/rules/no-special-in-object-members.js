let specialSymbolsRegExp = /[!#%&()*+/=@^_]/;

module.exports = {
	meta: {
		type: 'problem',
		messages: {
			errorMessage: `The object member have special symbols: {{ list of special symbols in object member }}`
		}
	},
	create(context) {
		return {
			VariableDeclaration(node) {
				let objectProperties = node.declarations[0].init.properties;

				objectProperties.forEach(property => {

					let objectMemeber = property.key.value;
					let specialSymbolInObjectMember = objectMemeber.match(specialSymbolsRegExp);


					if (specialSymbolInObjectMember) {
						let listOfSpecialSymbolsInThisObjectMember = specialSymbolInObjectMember.join('');
						context.report({
							node: node,
							messageId: 'errorMessage',
							data: {
								identifier: listOfSpecialSymbolsInThisObjectMember
							}
						});
					}
				});
			}
		};
	}
};