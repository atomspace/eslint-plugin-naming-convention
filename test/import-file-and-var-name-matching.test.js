const imoprtFileAndVarNameMatching = require('../src/rules/import-file-and-var-name-matching');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

const ERROR_MESSAGE = `variable name does not match import file`;

Object.assign(ruleTester.testerConfig, {
	parserOptions: {
		ecmaVersion:2018,
		sourceType: "module"
	}
}); 

ruleTester.run('import-file-and-var-name-matching', imoprtFileAndVarNameMatching, {
	valid: [{
		code: `let dock = require('./dock.js');`
	},
	{
		code: `import {dock} from './odessa.js';`
	},
	{
		code: `import toComplicatedName from './to-complicated-name.js';`
	},
	{
		code: `import toComplicatedName from './toComplicatedName.js';`
	},
	{
		code: `import to_complicated_name from './toComplicatedName.js';`
	},
	{
		code: `import to_Complicated_Name from './to-complicated-name.js';`
	},
	{
		code: `import simpleComponent from './SimpleComponent.jsx';`
	},
	{
		code: `import SimpleComponent from './SimpleComponent.jsx';`
	},
	{
		code: `import to_Complicated_Name from './to-complicated-name-service.js';`
	},
	{
		code: `import to_Complicated_Name from './to-complicated-name-controller.js';`
	},
	{
		code: `import to_Complicated_Name_Controller from './to-complicated-name-controller.js';`
	},
	{
		code:`let number = parseFloat('./dock.js');`
	},
	{
		code:`let ramda = require('ramda');`
	},
	{ 
		code:`let number = parseFloat('./dock');`
	},
	{
		code:`import noop from '../../services/noop.js'`
	},
	{
		code:`import guardianMouseController from 'guardian-mouse.controller.js'`
	},
	{
		code:`import guardianMouse from 'guardian-mouse.controller.js'`
	},
	{
		code: `import func from '10times.js'`
	},
	{
		code: `import removeKebab from 'remove-kebab.js'`
	},
	{
		code: `import './css/style.css'`
	},
	{
		code:`import long from '/utils/long'`
	},
	{
		code:`import lodash from 'lodash'`
	}
	

	
	],
	invalid: [{
			code: `import apples from './pears.js';`,
			errors: [{ message: ERROR_MESSAGE}]
		},
		{
			code: `import laptop from './SimpleComponent.jsx';`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code: `let boat = require('./dock.js');`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code: `import beer from './to-complicated-name';`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code: `let goodJob = require('./dockComplicated.js');`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code: `import coffeInCafe from './to-complicated-name.service.js';`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code: `import coffe_in_cafe from './to-complicated-name.controller.js';`,
			errors: [{ message: ERROR_MESSAGE }]
		},
		{
			code:`import iWnatToSleep from 'noDoNetwork'`,
			errors: [{ message: ERROR_MESSAGE }]
		}
	]
});