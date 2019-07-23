const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/only-english-comments');

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
			code: '// NORMAL COMMENT'
		},
		{
			code: '// 1234567890'
		},
		{
			code: '// !@#$%^&(){}[]+-_?"|'
		},
		{
			code: `
				// normal comment 1
				// normal comment 2
			`
		},
		{
			code: `
				/* normal 
				   comment */
			`
		},
		{
			code: '/**/'
		},
		{
			code: '//'
		},
		{
			code: '// /**/'
		},
		{
			code: '// //'
		}
	],

	invalid: [
		{
			code: `
				/* плохой 
				   комментарий */
			`,
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		},
		{
			code: '// плохой comment',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		},
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
		},
		{
			code: '// យោបល់អាក្រក់',
			errors: [{ message: 'Avoid using non latin characters in comments' }]
		}
	]
});