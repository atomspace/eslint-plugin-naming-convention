
let latinSymbolRegexp = /^([A-Za-z\s]*)$/g;


function splitStringBy(stringToSplit, separator){
	return stringToSplit.split(separator);
}

function transformStringToCharArray(stringToSplit){
	return splitStringBy(stringToSplit, '');
}

function regexpTest(regexp, string){
	return regexp.test(string);
}

function isItALatinSymbol(symbol){
	return regexpTest(latinSymbolRegexp, symbol);
}

function every(array, filterFunc){
	return array.some(filterFunc);
}

function checkCharArrayElementsToBeLatin(string){
	return every(transformStringToCharArray(string), isItALatinSymbol);
}

console.log(checkCharArrayElementsToBeLatin('прпаfggfdві'))