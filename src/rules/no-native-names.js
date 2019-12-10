module.exports = {
	meta: {
		messages: {
			noNativeNames: 'Avoid using native classes in identifiers (e.g. "String", "Object").'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				const NATIVE_CLASSES = /(number|string|object|function|boolean|bool|array|undefined|null|symbol|set|promise)$/i;
				let nativeClassNameIsInIdentifier = NATIVE_CLASSES.test(node.name);

				if (nativeClassNameIsInIdentifier) {
					context.report({
						node,
						messageId: 'noNativeNames',
						data: {
							name: node.name
						}
					});
				}
			}
		};
	}
};