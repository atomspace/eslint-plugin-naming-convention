const notLatinSymbolRegexp = /[^\w$]/;

module.exports = {
	meta: {
		type:"problem"
	},
	create (context) {
		return {
			Identifier (node) {
				let active = notLatinSymbolRegexp.test(node.name);
				if (active) {
					context.report({
						node, 
						message: 'variable name consist non-latin char.'
					});
				}
			}
		};
	}
};

