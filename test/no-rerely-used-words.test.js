const RuleTester = require('eslint').RuleTester,

	rule = require('../src/rules/no-rerely-used-words/index');

const ruleTester = new RuleTester();

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion: 2018
	}
});

ruleTester.run('no-rerely-used-words', rule, {
	valid: [
		{
			code: 'let testName = 1'
		},
		{
			code: 'function testName() {}'
		},
		{
			code: 'let testName = function() {}'
		},
		{
			code: '{ testName: 1 }'
		},
		{
			code: 'let test_name = 1'
		},
		{
			code: 'function test_name() {}'
		},
		{
			code: 'let test_name = function() {}'
		},
		{
			code: '{ test_name: 1 }'
		},
		{
			code: 'let testName_long = 1'
		},
		{
			code: 'function testName_long() {}'
		},
		{
			code: 'let testName_long = function() {}'
		},
		{
			code: '{ testName_long: 1 }'
		},
		{
			code: 'let TEST_NAME = 1'
		},
		{
			code: 'function TEST_NAME() {}'
		},
		{
			code: 'let TEST_NAME = function() {}'
		},
		{
			code: '{ TEST_NAME: 1 }'
		},
		{
			code: 'let name101 = 1'
		},
		{
			code: 'function name101() {}'
		},
		{
			code: 'let name101 = function() {}'
		},
		{
			code: '{ name101: 1 }'
		}
	],

	invalid: [
		{
			code: 'let strangelySoundingCombination = 1',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'function strangelySoundingCombination() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let strangelySoundingCombination = function() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: '{ strangelySoundingCombination: 1 }',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let strangely_sounding_combination = 1',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'function strangely_sounding_combination() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let strangely_sounding_combination = function() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: '{ strangely_sounding_combination: 1 }',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let strangelySounding_combination = 1',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'function strangelySounding_combination() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let strangelySounding_combination = function() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: '{ strangelySounding_combination: 1 }',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let STRANGELY_SOUNDING_COMBINATION = 1',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'function STRANGELY_SOUNDING_COMBINATION() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: 'let STRANGELY_SOUNDING_COMBINATION = function() {}',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		},
		{
			code: '{ STRANGELY_SOUNDING_COMBINATION: 1 }',
			errors: [{ message: 'Avoid using rerely used words in identifiers' }]
		}
	]
});