const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/no-native-names');

const ruleTester = new RuleTester();

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('no-native-names', rule, {
	valid: [
		{
			code: 'let testName = 1'
		},
		{
			code: 'function stringify(){}'
		}, 
		{
			code: 'let numbers = [1,2,3]'
		}, 
		{
			code: ''
		}
	],

	invalid: [
		{
			code: 'let testNumber = 1',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'let testArray = []',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'let testFunction = function() {}',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'function testFunction() {}',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'let testObject = {}',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'let testString = "string"',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		},
		{
			code: 'let testBoolean = true',
			errors: [{ message: 'Avoid using native classes in identifiers (e.g. "String", "Object").' }]
		}
	]
});