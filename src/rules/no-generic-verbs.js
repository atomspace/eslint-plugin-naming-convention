let utils = require('../utils');

module.exports = {
	meta: {
		type: 'problem',
		messages: {
			errorMessage: `The identifier has generic verb: {{ genericVerb }}`
		}
	},
	create(context) {
		return {
			Identifier(node) {
				const GENERIC_VERBS = ['get', 'set', 'array', 'check', 'validate', 'make', 'process', 'start'];
				let variableName = node.name;

				let splitedVariableName = utils.splitWord(variableName);

				splitedVariableName.forEach(word => {
					if (GENERIC_VERBS.includes(word)){
						context.report({
							node: node,
							messageId: 'errorMessage',
							data: {
								genericVerb: word
							}
						});
					}
				});


			}
		};
	}
};