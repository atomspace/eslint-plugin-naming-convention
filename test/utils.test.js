// import {latinSymbolRegexp, checkCharArrayElementsToBeLatin, every, transformStringToCharArray, isItALatinSymbol} from '../../utils';
// import { exportAllDeclaration } from '@babel/types';

// let arrayWithOnlyTrueConditionElements;
// let arrayWithOnlyFalseConditionElements;
// let arrayWithTrueAndFalseConditionElements;
// let arrayWithoutArguments;
// let stringWithoutAnySymbol;
// let equalToX = (char) => char === 'x';


// beforeEach(() => {
// 	stringWithoutAnySymbol = '';
// 	arrayWithoutArguments = [];
// 	arrayWithOnlyTrueConditionElements = ['x','x','x','x','x'];
// 	arrayWithOnlyFalseConditionElements = ['y','y','y','y','y'];
// 	arrayWithTrueAndFalseConditionElements = ['x','y','y','x','x','x'];
// });

// describe('Function', () => {
// 	describe('checkCharArrayElementsToBeLatin', () => {
// 		describe('return true', () => {
// 			it('when whe put string, consist only from lowercase latin characters',() => {
// 				expect(checkCharArrayElementsToBeLatin('kingcrimson')).toBe(true);
// 			});
// 			it('when whe put string, consist only from uppercase latin characters',() => {
// 				expect(checkCharArrayElementsToBeLatin('MOODYBLUES')).toBe(true);
// 			});
// 			it('when whe put string, consist only from uppercase and lowercase latin characters',() => {
// 				expect(checkCharArrayElementsToBeLatin('AeRoSmItH')).toBe(true);
// 			});
// 		});

// 		describe('return false', () => {
// 			it('when we put string, consist only from non-latin characters', () => {
// 				expect(checkCharArrayElementsToBeLatin('ромашка')).toBe(false);
// 			});

// 			it('when whe put string, consist only from uppercase and lowercase latin characters, but have spaces',() => {
// 				expect(checkCharArrayElementsToBeLatin('GREATFULL dead')).toBe(false);
// 			});

// 			it('when we put string, consist from latin and non-latin characters', () => {
// 				expect(checkCharArrayElementsToBeLatin('POMашка')).toBe(false);
// 			});

// 			it('when we put string, consist from one latin and other non-latin characters', () => {
// 				expect(checkCharArrayElementsToBeLatin('Rомашка')).toBe(false);
// 			});

// 			it('when we put string, consist from one non-latin and other latin characters', () => {
// 				expect(checkCharArrayElementsToBeLatin('Рomashka')).toBe(false);
// 			});

// 			it('when we put string, consist from one non-latin and other latin characters', () => {
// 				expect(checkCharArrayElementsToBeLatin('Рomashka')).toBe(false);
// 			});
// 		});
// 	});

