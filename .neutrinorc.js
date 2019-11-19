module.exports = {
	use: [
		['@atomspace/eslint', {
			eslint: {
				env: {node: true},
				plugins: ['self'],
				rules: {
					'self/latin-var-name-only': 'warn',
					'self/no-rerely-used-words': 'warn',
					// 'self/no-special-in-object-members': 'warn',
					'eslint-plugin/require-meta-docs-url': ['warn', {
						'pattern': 'https://github.com/atomspace/eslint-plugin-naming-convention/blob/master/docs/rules/{{name}}.md'
					 }]
				}
			}
		}], 
		'@neutrinojs/node', 
		'@neutrinojs/jest'
	]
};