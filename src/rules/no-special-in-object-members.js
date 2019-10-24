let specialSymbolsRegExp = /[!#%&()*+/=@^_]/;

module.exports = {
	meta: {
		type: 'problem'
	},
	create (context) {
		return {
			VariableDeclaration (node) {
				let objectProperties = node.declarations[0].init.properties;

				objectProperties.forEach(property => {

					let objectMemeber = property.key.value;
					let objectMemberHaveSpecialSymbol = objectMemeber.match(specialSymbolsRegExp);

					if (objectMemberHaveSpecialSymbol) {
						context.report({
							node,
							message: 'object have special symbol',
							// fix: (fixer) => {
							// 	return fixer.insertTextAfter(node, ";");
							// }
						});
					}
				});
//постановка, планирование, организация задач, время, мотивация
			}
		};
	}
};