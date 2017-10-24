//import functions
const { hasVowel } = require('./vowels-occurence.js');
const { filterStringsContainVowels} = require('./vowels-occurence.js');
// to test all functions in vowel-occurence.js

describe('003-string-world', () => {

    //to test hasVowel function
    describe('hasVowel()', () => {
        it('should be defined', () => {
            expect(hasVowel).toBeDefined();
        });
        it('should return true when string has vowel', () => {
            expect(hasVowel("apple")).toBe(true);
            expect(hasVowel("kiwi")).toBe(true);
            expect(hasVowel("truck")).toBe(true);
            expect(hasVowel("orange")).toBe(true);
        });
        it('should return false when string has no vowel', () => {
            expect(hasVowel("ppl")).toBe(false);
            expect(hasVowel("plm")).toBe(false);
            expect(hasVowel("gltn")).toBe(false);
            expect(hasVowel("grp")).toBe(false);
        });
    });

    describe('filterStringsContainVowels()', () => {
        it('should be defined', () => {
            expect(filterStringsContainVowels).toBeDefined();
        });
        it('should return elements who have vowels', () => {
            expect(filterStringsContainVowels(['add', 'syh', 'kmjn', 'ninja'])).toEqual(['add', 'ninja']);
            expect(filterStringsContainVowels(['jkl', 'uiop'])).toEqual(['uiop']);
            expect(filterStringsContainVowels(['jkd', 'sykmh', 'kmijn', 'nlm'])).toEqual(['kmijn']);
        });
        it('should return no elements/empty array when no vowels are present', () => {
            // let actualResult = filterStringsContainVowels(['syh', 'kmjn']);
            // let expectedResult = [];
            // console.log(actualResult, expectedResult);
            // expect(actualResult).toEqual(expectedResult);
            expect(filterStringsContainVowels(['jkmml', 'lp', 'jrt'])).toEqual([]);
            expect(filterStringsContainVowels(['jkd', 'sykmh', 'kmn', 'nlm'])).toEqual([]);
        });
    });
});
