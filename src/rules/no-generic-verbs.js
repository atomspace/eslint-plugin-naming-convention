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
				const GENERIC_VERBS = ['set', 'get', 'array', 'check', 'validate', 'make', 'process', 'start'];
				let variableName = node.name;

				let splitedVariableName = utils.splitVariable(variableName);

				let genericVerbInVariable;

				for (let word of splitedVariableName) {
					if (GENERIC_VERBS.includes(word)) {
						genericVerbInVariable = word;
						break;
					}
				}

				if (!genericVerbInVariable) return;

				context.report({
					node,
					messageId: 'errorMessage',
					data:{
						genericVerbInVariable
					}
				});
			}
		};
	}
};