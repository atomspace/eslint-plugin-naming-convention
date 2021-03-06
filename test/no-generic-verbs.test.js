const noGenericVerbs = require('../src/rules/no-generic-verbs');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();


Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('no-generic-verb', noGenericVerbs, {
	valid: [
		{
			code: ``
		},
		{
			code: `function watchMovie() {
				return 'ok'
			}`
		},
		{
			code: `let number = 5`
		},
		{
				code: `let obj = {
				hi: 'hello',
				'how': 'are',
				'you': 'hmm'
			}`
		},
		{
			code:`let i = 'get'`
		},
		{
			code:`i.split('');`
		},
		{
			code:`deleteName(name)`
		},
		{
			code:`user.drinkSomeWater()`
		},
		{
			code:`validateValue('dfdf')`
		}
	],
	invalid: [
		{
			code: `function getNumberFive(){
				return 5;
			}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `function validatePassword(password){
				return password === 'cucumber'
			}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let set_variable_balue = 5`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let set_object_value = () => 6`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `function watch_process_of_server(){
					return 'all right'
				}`,
			errors: [{ messageId: 'errorMessage' }]
		},
		{
			code: `let processId = 7546`,
			errors: [{ messageId: 'errorMessage' }]
		}
	]
});