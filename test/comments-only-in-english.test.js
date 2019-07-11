const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/comments-only-in-english/index');

const ruleTester = new RuleTester();

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('comments-only-in-english', rule, {
	valid: [
		{
			code: '// normal comment'
		},
		{
			code: '// normal-comment'
		},
		{
			code: '// normal comment 22'
		}
	],

	invalid: [
		{
			code: '// плохой комментарий',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		},
		{
			code: '// 糟糕的評論',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		},
		{
			code: '// खराब टिप्पणी',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		},
		{
			code: '// ცუდი კომენტარი',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		}
	]
});