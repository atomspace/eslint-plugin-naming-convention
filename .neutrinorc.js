module.exports = {
	use: [
		['@atomspace/eslint', {
			eslint: {
				env: {
               node: true
            }
			}
		}], 
		'@neutrinojs/node', 
		'@neutrinojs/jest'
	]
};