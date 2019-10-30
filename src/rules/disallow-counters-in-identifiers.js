module.exports = {
	meta: {
		messages: {
			disallowCountersInIdentifiers: 'Avoid using counters in identifiers'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				let isRerelyUsedWord = /\d+/.test(node.name);

				if (isRerelyUsedWord) {
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