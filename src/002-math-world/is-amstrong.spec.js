// import functions
const { isAmstrong } = require('./is-amstrong.js');
// to test all functions in is-amstrong.js
describe('002-math-world', ()=>{
    
    // to test isAmstrong function
    describe('isAmstrong()', ()=>{
        it('should be defined', ()=>{
            expect(isAmstrong).toBeDefined();
        });
        it('should return true when argument is an amstrong number', ()=>{
            expect(isAmstrong(371)).toBe(true);
            expect(isAmstrong(407)).toBe(true);
            expect(isAmstrong(370)).toBeTruthy();
            expect(isAmstrong(2)).toBe(true);
        });
        it('should return false when argument is not an amstrong number', ()=>{
            expect(isAmstrong(111)).toBe(false);
            expect(isAmstrong(2222)).toBeFalsy();
        });
    });
});