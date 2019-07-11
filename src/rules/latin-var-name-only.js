const notLatinSymbolRegexp = /[^\w$]/;

module.exports = {
	meta: {
		type:"problem"
	},
	create (context) {
		return {
			Identifier (node) {
				let hasVarNameNonLatinSymbol = notLatinSymbolRegexp.test(node.name);
				if (hasVarNameNonLatinSymbol) {
					context.report({
						node, 
						message: 'variable name consist non-latin char'
					});
				}
			}
		};
	}
};

