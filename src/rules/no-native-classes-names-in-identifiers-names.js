module.exports = {
	meta: {
		messages: {
			noNativeClassesNamesInIdentifiersNames: 'Avoid using native classes names in identifiers names.'
		}
	},
	create (context) {
		return {
			Identifier (node) {
				const nativeClassNamesRegExp = /Number|number|String|string|Object|object|Function|function|Boolean|boolean|Bool|bool|Array|array/;
				let nativeClassNameInIdentifier = nativeClassNamesRegExp.test(node.name);

				if (nativeClassNameInIdentifier) {
					context.report({
						node,
						messageId: 'noNativeClassesNamesInIdentifiersNames',
						data: {
							name: node.name
						}
					});
				}
			}
		};
	}
};