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
				let nativeClassNameIsInIdentifier = NATIVE_CLASSES_REGEXP.test(node.name);

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