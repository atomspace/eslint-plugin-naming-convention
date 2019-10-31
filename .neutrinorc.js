module.exports = {
	use: [
		['@atomspace/eslint', {
			eslint: {
				env: {node: true},
				plugins: ['self'],
				rules: {
					'self/latin-var-name-only': 'warn',
					'self/no-rerely-used-words': 'warn'
				}
			}
		}], 
		'@neutrinojs/node', 
		'@neutrinojs/jest'
	]
};