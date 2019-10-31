module.exports = {
	meta: {
		messages: {
			disallowCountersInIdentifiers: 'Avoid using counters in identifiers'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				let numberRegExp = /\d+/;
				let isNumberInIdentifier = numberRegExp.test(node.name);

				if (isNumberInIdentifier) {
					context.report({
						node,
						messageId: 'disallowCountersInIdentifiers',
						data: {
							name: node.name
						}
					});
				}
			}
		};
	}
};