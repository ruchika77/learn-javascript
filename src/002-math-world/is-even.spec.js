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
            let sampleInput = 2;
            let expectedOutput = true;
            let actualOutput = isEven(sampleInput);
            expect(actualOutput).toBe(expectedOutput);
            
            sampleInput = 8;
            expectedOutput = true;
            actualOutput = isEven(sampleInput);
            expect(actualOutput).toBe(expectedOutput);

            expect(isEven(30)).toBeTruthy();
            expect(isEven(333332)).toBeTruthy();
            expect(isEven(10000000000)).toBeTruthy();
        });
        it('should return false when argument is an odd number', ()=>{
            expect(isEven(3)).toBeFalsy();
            expect(isEven(9)).toBeFalsy();
            expect(isEven(31)).toBeFalsy();
            expect(isEven(333333)).toBeFalsy();
            expect(isEven(10000000001)).toBeFalsy();
        });
    });
});