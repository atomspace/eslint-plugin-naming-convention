function checkComments (node, context) {
	let errorExists = true;

	if (errorExists) {
		context.report({
			node,
			messageId: 'noRerelyUsedWords',
			data: {
				name: node.name
			}
		});
	}
}

module.exports = checkComments;
