let specialSymbolsRegExp = /[!#%&()*+/=@^_]/;

module.exports = {
	meta: {
		type: 'problem',
		messages: {
            errorMessage: `Object member have special symbol {{ identifier }}`
        }
	},
	create (context) {
		return {
			VariableDeclaration (node) {
				let objectProperties = node.declarations[0].init.properties;

				objectProperties.forEach(property => {

					let objectMemeber = property.key.value;
					let objectMemberHaveSpecialSymbol = specialSymbolsRegExp.test(objectMemeber);
					

					if (objectMemberHaveSpecialSymbol) {
						let specialSymbolFromObjectMember = objectMemeber.match(specialSymbolsRegExp)[0];
						context.report({
							node:node,
							messageId: 'errorMessage',
							data:{
								identifier:specialSymbolFromObjectMember
							}
						});
					}
				});
			}
		};
	}
};