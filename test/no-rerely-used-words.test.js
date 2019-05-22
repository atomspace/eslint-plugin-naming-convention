const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/no-rerely-used-words/index');

const ruleTester = new RuleTester();

ruleTester.run('no-rerely-used-words', rule, {
	valid: [
		{
			code: 'the',
			options: [{ }]
		}
	],

	invalid: [
		{
			code: 'strangelySoundingCombination',
			errors: [{ message: 'Rerely used words in variable.' }]
		}
	]
});