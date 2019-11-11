const noSpecialInObjectMember = require('../src/rules/no-special-in-object-members');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();



Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});
ruleTester.run('no-special-in-object-members', noSpecialInObjectMember, {
	valid: [
		{
			code: `let obj = {'zno':"the end"}`
		},
		{
			code: `let obj = {'chapter-six':'Tokyo'}`
		},
		{
			code: `var obj = {'zno':"the end"}`
		},
		{
			code: `var obj = {'chapter-six':'Tokyo'}`
		},
		{
			code: `let object = {'simpleMethod':() => 'method'}`
		},{
			code: ''
		},
		{
			code:'let i = 0'
		}
	],
	invalid: [
		{
			code: `let object = {'c#whatis':23}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let object = {'mail@my':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let object = {'H&P':'laptop'}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let code = {'%^&*()+=/':23}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'!mailmy':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'H & P':'laptop'}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'mailmy':543, 'allRight': 45, '!allNotRight':9567}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'mailmy':543, 'hwat%is&going$on':35645}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'mai=lmy':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'m()ailmy':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'ma*ilmy':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'mailm&y':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'mail^my':543}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'ml^insert': () => 'hi'}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `var object = {'ma&edge': () => {console.log('guido')} }`,
			errors: [{ messageId: 'errorMessage' }]
		}

	]
});