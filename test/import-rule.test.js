const imoprtFileAndVarNameMatching = require('../src/rules/import-file-and-var-name-matching');

let RuleTester = require('eslint').RuleTester;

let ruleTester = new RuleTester();	

const errorMessage = `import file do not match with variable name`;

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
	}
	
	],
	invalid: [{
			code: `import apples from './pears.js';`,
			errors: [{ message: errorMessage}]
		},
		{
			code: `import laptop from './SimpleComponent.jsx';`,
			errors: [{ message: errorMessage }]
		},
		{
			code: `let boat = require('./dock.js');`,
			errors: [{ message: errorMessage }]
		},
		{
			code: `import beer from './to-complicated-name.js';`,
			errors: [{ message: errorMessage }]
		},
		{
			code: `let goodJob = require('./dockComplicated.js');`,
			errors: [{ message: errorMessage }]
		},
		{
			code: `import coffeInCafe from './to-complicated-name-service.js';`,
			errors: [{ message: errorMessage }]
		},
		{
			code: `import coffe_in_cafe from './to-complicated-name-controller.js';`,
			errors: [{ message: errorMessage }]
		}
	]
});