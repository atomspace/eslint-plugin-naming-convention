let mostCommonWords = new Set('the', 'of', 'to', 'and', 'a', 'in', 'is', 'it', 'you', 'that', 'he', 'was', 'for', 'on', 'are', 'with', 'as', 'I', 'his');

function checkWords (node, context) {
	let wordsInVar = node.name.split(/[A-Z]/);
	let sendReport = false;

	wordsInVar.forEach(function (word) {
		if (!mostCommonWords.has(word)) {
			sendReport = true;
		}
	});

	if (sendReport) {
		context.report({
			node,
			messageId: 'noRerelyUsedWords',
			data: {
				name: 'name'
			}
		});
	}
}

module.exports = checkWords;