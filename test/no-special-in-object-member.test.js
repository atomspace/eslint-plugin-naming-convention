const noSpecialInObjectMember = require('../src/rules/no-special-in-object-members');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

const errorMessage = `object have special symbol`;

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion:2018
	}
}); 
		ruleTester.run('latin-var-name-only', noSpecialInObjectMember, {
			valid: [
				{
					code:`let obj = {'zno':"the end"}`
				},
				{
					code:`let obj = {'chapter-six':'Tokyo'}`
				},
				{
					code:`var obj = {'zno':"the end"}`
				},
				{
					code:`var obj = {'chapter-six':'Tokyo'}`
				}
			],
			invalid: [
				{
					code:`let object = {'c#whatis':23}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`let object = {'mail@my':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`let object = {'H&P':'laptop'}`,
					errors: [{ message: errorMessage }]	
				},
				{
					code:`let code = {'%^&*()+=/':23}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'!mailmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'H & P':'laptop'}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'!mailmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'mai/lmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'mai=lmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'m()ailmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'ma*ilmy':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'mailm&y':543}`,
					errors: [{ message: errorMessage }]
				},
				{
					code:`var object = {'mail^my':543}`,
					errors: [{ message: errorMessage }]
				}
			]
		});