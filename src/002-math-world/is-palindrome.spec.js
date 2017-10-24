// import functions
const { isPalindrome } = require('./is-palindrome.js');
// to test all functions in is-palindrome.js
describe('002-math-world', ()=>{
    
    // to test isPalindrome function
    describe('isPalindrome()', ()=>{
        it('should be defined', ()=>{
            expect(isPalindrome).toBeDefined();
        });
        it('should return true when argument is an palindrome number', ()=>{
            expect(isPalindrome(12321)).toBe(true);
            expect(isPalindrome(40704)).toBe(true);
            expect(isPalindrome(370073)).toBe(true);
        });
        it('should return false when argument is not an palindrome number', ()=>{
            expect(isPalindrome(122)).toBe(false);
            expect(isPalindrome(205)).toBe(false);
        });
    });
});