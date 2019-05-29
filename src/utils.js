function splitStringBy(stringToSplit, separator){
	return stringToSplit.split(separator);
}

function regexpTest(regexp, string){
	return regexp.test(string);
}

function isItALatinSymbol(symbol){
	return regexpTest(latinSymbolRegexp, symbol);
}

function transformStringToCharArray(stringToSplit){
	if(stringToSplit === '') return false;
	 else return splitStringBy(stringToSplit, '');
	//return splitStringBy(stringToSplit, '');
}

function every(array, filterFunc){
	if(array.length === 0) return false;
	else return array.every(filterFunc);
}

function areCharArrayElementsLatin(string){ 
	return every(transformStringToCharArray(string), isItALatinSymbol);
}

//console.log(checkCharArrayElementsToBeLatin('fghjhgfdsa'))