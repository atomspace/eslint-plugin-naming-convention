const latinVarNameOnly = require('../src/rules/latin-var-name-only');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion:2018
	}
}); 
// Проверить свойства объектов и аргументы функции, function declaration, named function expression
		ruleTester.run('latin-var-name-only', latinVarNameOnly, {
			valid: [{
					code: 'var whiteAlbum = true'
				},
				{
					code: 'var $whiteAlbum = true'
				},
				{
					code: 'var white_Album = true'
				},
				{
					code: 'let kraftWork = 7'
				},
				{
					code: 'function rollingStones(){return 1;}',
				},
				{
					code: 'let kraftWork = 7'
				},
				{
					code:'[34,45].forEach((element) => element)',
				},
				{
					code:'let obj = {zno:"the end"}',
				}
			],
			invalid: [{
					code: 'let табулатура = true',
					errors: [{ message: "variable name consist non-latin char." }],
				},
				{
					code:'var амброзия = 90',
					errors: [{ message: "variable name consist non-latin char." }]
				},
				{
					code:'var Аббреviatura = 57',
					errors: [{ message: "variable name consist non-latin char." }]
				},
				{
					code:'function функция(){return 1;}',
					errors: [{ message: "variable name consist non-latin char." }]
				},
				{
					code:'[34,45].дляКаждого((element) => element)',
					errors: [{ message: "variable name consist non-latin char." }],
				},
				{
					code:'let obъект = {callMe:23}',
					errors: [{ message: "variable name consist non-latin char." }],
				}
			]
		});




