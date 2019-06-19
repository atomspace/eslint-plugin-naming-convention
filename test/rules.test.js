const latinVarNameOnly = require('../src/rules/latin-var-name-only');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

const errorMessage = [{ message: "variable name consist non-latin char." }];

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion:2018
	}
}); 
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
					code: 'function rollingStones(){return 1;}'
				},
				{
					code: 'let kraftWork = 7'
				},
				{
					code:'[34,45].forEach((element) => element)'
				},
				{
					code:'let obj = {zno:"the end"}'
				},
				{
					code:'let obj = {'chapter-six':'Tokyo'}'
				}
			],
			invalid: [{
					code: 'let табулатура = true',
					errors: errorMessage
				},
				{
					code:'var амброзия = 90',
					errors: errorMessage
				},
				{
					code:'var Аббреviatura = 57',
					errors: errorMessage
				},
				{
					code:'function функция(){return 1;}',
					errors: errorMessage
				},
				{
					code:'[34,45].дляКаждого((element) => element)',
					errors: errorMessage
				},
				{
					code:'let obъект = {callMe:23}',
					errors: errorMessage
				}
			]
		});




