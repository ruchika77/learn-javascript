//importing function
const { totalOfList } = require('./total-running.js');

// to test total-running.js function

describe('003-string-world', () => {

    describe('totalOfList()', () => {
        it('should be defined', () => {
            expect(totalOfList).toBeDefined();
        });
        it('should return count of elements in list', () => {
            expect(totalOfList([0])).toBe(0);
            expect(totalOfList([1.0, 2.8, 0])).toBe(3.8);
            expect(totalOfList([-1, -2])).toBe(-3);
        });
    });
});