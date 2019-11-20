let utils = require('../utils');

module.exports = {
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/atomspace/eslint-plugin-naming-convention/blob/master/docs/rules/no-generic-verbs.md'
		},
		messages: {
			errorMessage: `The identifier has generic verb: {{ genericVerbInVariable }}.`
		}
	},
	create (context) {
		return {
			Identifier (node) {
				const GENERIC_VERBS = new Set(['set', 'get', 'check', 'validate', 'make', 'process', 'start']);
				let variableName = node.name;
				let splitedVariableName = utils.splitVariable(variableName);
				let genericVerbInVariable = splitedVariableName.filter(word => GENERIC_VERBS.has(word));

				if (genericVerbInVariable.length === 0) return;
				context.report({
					node,
					messageId: 'errorMessage',
					data: {
						genericVerbInVariable
					}
				});
			}
		};
	}
};