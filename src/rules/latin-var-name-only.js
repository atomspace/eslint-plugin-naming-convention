const NOT_LATIN_SYMBOL_REGEXP = /[^\w$]/;

module.exports = {
	meta: {
		type: 'problem'
	},
	create (context) {
		return {
			Identifier (node) {
				let hasVarNameNonLatinSymbol = NOT_LATIN_SYMBOL_REGEXP.test(node.name);

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