// import functions
const { isEven } = require('./is-even.js');

// to test all functions in is-even.js
describe('002-math-world', ()=>{
    
    // to test isEven function
    describe('isEven()', ()=>{
        it('should be defined', ()=>{
            expect(isEven).toBeDefined();
        });
        it('should return true when argument is an even number', ()=>{
            expect(isEven(2)).toBeTruthy();
            expect(isEven(8)).toBeTruthy();
            expect(isEven(30)).toBeTruthy();
            expect(isEven(333332)).toBeTruthy();
            expect(isEven(10000000000)).toBeTruthy();
        });
        it('should return false when argument is an odd number', ()=>{
            expect(isEven(3)).toBeTruthy();
            expect(isEven(9)).toBeTruthy();
            expect(isEven(31)).toBeTruthy();
            expect(isEven(333333)).toBeTruthy();
            expect(isEven(10000000001)).toBeTruthy();
        });
    });
});