// import functions
const { isOdd } = require('./is-odd-list.js');
// to test all functions in is-odd-list.js
describe('002-math-world', () => {

    // to test isOdd function
    describe('isOdd()', () => {
        it('should be defined', () => {
            expect(isOdd).toBeDefined();
        });
        it('should return elements on odd position', () => {
            expect(isOdd([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
            expect(isOdd([2, 3])).toEqual([2]);
        });
    });
});