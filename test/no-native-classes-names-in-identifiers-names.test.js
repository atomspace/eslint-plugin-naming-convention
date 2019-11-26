const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/no-native-classes-names-in-identifiers-names');

const ruleTester = new RuleTester();

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('no-native-classes-names-in-identifiers-names', rule, {
	valid: [
		{
			code: 'let testName = 1'
		},
		{
			code: 'let testName = []'
		},
		{
			code: 'let testName = function() {}'
		},
		{
			code: 'function testName() {}'
		},
		{
			code: 'let testName = {}'
		},
		{
			code: 'let testName = "string"'
		},
		{
			code: 'let testName = true'
		}
	],

	invalid: [
		{
			code: 'let testNumber = 1',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let testArray = []',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let testFunction = function() {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'function testFunction() {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let testObject = {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let testString = "string"',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let testBoolean = true',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let numberTest = 1',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let arrayTest = []',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let functionTest = function() {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'function functionTest() {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let objectTest = {}',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let stringTest = "string"',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		},
		{
			code: 'let booleanTest = true',
			errors: [{ message: 'Avoid using native classes names in identifiers names.' }]
		}
	]
});