module.exports = {
	meta: {
		messages: {
			disallowCountersInIdentifiers: 'Avoid using counters in identifiers'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				const numberRegExp = /\d+/;
				let numberInIdentifier = numberRegExp.test(node.name);

				if (numberInIdentifier) {
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