const latinVarNameOnly = require('../src/rules/latin-var-name-only');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

const errorMessage = 'variable name consist non-latin char';

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
					code:`let obj = {'chapter-six':'Tokyo'}`
				}
			],
			invalid: [{
					code: 'let табулатура = true',
					errors: [{ message: errorMessage}]
				},
				{
					code:'var амброзия = 90',
					errors: [{ message: errorMessage }]
				},
				{
					code:'var Аббреviatura = 57',
					errors: [{ message: errorMessage }]
				},
				{
					code:'function функция(){return 1;}',
					errors: [{ message: errorMessage }]
				},
				{
					code:'[34,45].дляКаждого((element) => element)',
					errors: [{ message: errorMessage }]
				},
				{
					code:'let obъект = {callMe:23}',
					errors: [{ message: errorMessage }]
				},
				{
					code:'let compаre = {callMe:23}',
					errors: [{ message: errorMessage }]
				}
			]
		});




