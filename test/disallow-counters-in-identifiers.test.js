const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/disallow-counters-in-identifiers');

const ruleTester = new RuleTester();

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('no-rerely-used-words', rule, {
	valid: [
		{
			code: 'let firstBook'
		},
		{
			code: 'function firstBook() {}'
		},
		{
			code: 'let firstBook = function() {}'
		},
		{
			code: '{ firstBook: 1 }'
		}
	],
	invalid: [
		{
			code: 'let book1',
			errors: [{ message: 'Avoid using counters in identifiers' }]
		},
		{
			code: 'let book10975434',
			errors: [{ message: 'Avoid using counters in identifiers' }]
		},
		{
			code: 'function book1() {}',
			errors: [{ message: 'Avoid using counters in identifiers' }]
		},
		{
			code: 'let book1 = function() {}',
			errors: [{ message: 'Avoid using counters in identifiers' }]
		},
		{
			code: '{ book1: 1 }',
			errors: [{ message: 'Avoid using counters in identifiers' }]
		}
	]
});