let utils = require('../utils');

module.exports = {
	meta: {
		type: 'problem',
		fixable: 'code'
	},
	create(context) {
		return {
			Identifier(node) {
				const GENERIC_VERBS = ['get', 'set', 'array', 'check', 'validate', 'make', 'process', 'start'];
				let variableName = node.name;

				let splitedVariableName = utils.splitWord(variableName);

				splitedVariableName.forEach(word => {
					if (GENERIC_VERBS.includes(word)){
						
					}
				});


			}
		};
	}
};