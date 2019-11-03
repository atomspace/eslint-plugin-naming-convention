let cyrrillicToLatinaChar = {
	'А': 'A',
	'а': 'a',
	'В': 'B',
	'в': 'b',
	'С': 'C',
	'с': 'c',
	'Е': 'E',
	'е': 'e',
	'Н': 'H',
	'н': 'h',
	'К': 'K',
	'к': 'k',
	'М': 'M',
	'м': 'm',
	'О': 'O',
	'о': 'o',
	'Р': 'P',
	'р': 'p',
	'Т': 'T',
	'т': 't',
	'Х': 'X',
	'х': 'x',
	'У': 'Y',
	'у': 'y',
	'і': 'i',
	'І': 'I',
	'И': 'N',
	'Я':'R'
	
};

function findClosestLatinToCyrrilicCharSimilarity(char){
	return cyrrillicToLatinaChar[char] || char;
}

module.exports = findClosestLatinToCyrrilicCharSimilarity;