//import functions
const { getFactors } = require('./is-prime.js');
const { isPrime } = require('./is-prime.js');
// to test all functions in is-prime.js

fdescribe('002-math-world', () => {

    //to test getFactors function
    describe('getFactors()', () => {
        it('should be defined', () => {
            expect(getFactors).toBeDefined();
        });
        it('should return factors of given number', () => {
            expect(getFactors(8)).toEqual([1, 2, 4, 8]);
            expect(getFactors(4)).toEqual([1, 2, 4]);
            expect(getFactors(2)).toEqual([1, 2]);
        });
    });

    //to test isPrime function
    describe('isPrime()', () => {
        it('should be defined', () => {
            expect(isPrime).toBeDefined();
        });
        it('should return true when number is prime', () => {
            expect(isPrime(2)).toBe(true);
            expect(isPrime(3)).toBe(true);
            expect(isPrime(17)).toBe(true);
        });
        it('should return false when number is not prime', () => {
            expect(isPrime(24)).toBe(false);
            expect(isPrime(35)).toBe(false);
            expect(isPrime(45)).toBe(false);
        });
    });
});
