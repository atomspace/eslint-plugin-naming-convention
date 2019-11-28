module.exports = {
	meta: {
		messages: {
			noNativeNames: 'Avoid using native classes in identifiers (e.g. "String", "Object").'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				const NATIVE_CLASSES_REGEXP = /(number|string|object|function|boolean|bool|array)$/i;
				let isNativeClassNameInIdentifier = NATIVE_CLASSES_REGEXP.test(node.name);

				if (isNativeClassNameInIdentifier) {
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