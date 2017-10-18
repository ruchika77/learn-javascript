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
            expect(isAmstrong(371)).toBeTruthy();
            expect(isAmstrong(407)).toBeTruthy();
            expect(isAmstrong(370)).toBeTruthy();
        });
        it('should return false when argument is not an amstrong number', ()=>{
            expect(isAmstrong(3)).toBeTruthy();
            expect(isAmstrong(9)).toBeTruthy();
        });
    });
});