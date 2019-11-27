module.exports = {
	meta: {
		messages: {
			noNativeClassesInIdentifiers: 'Avoid using native classes in identifiers (e.g. "Sting", "Object").'
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
						messageId: 'noNativeClassesInIdentifiers',
						data: {
							name: node.name
						}
					});
				}
			}
		};
	}
};