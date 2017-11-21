//import functions
const { isAllPass, getResult } = require('./getResult.js');

// to test all functions in getResult.js
//var allStudents = require('E:/Ruchi/jupyter-notebooks/data/student-data.json');
var testStudentData = [
    { "Name": "Ruchika", "gender": "Female", "marks": [62, 66, 88, 48, 62, 91] },
    { "Name": "Shiva", "gender": "Male", "marks": [35, 65, 66, 68, 44, 29] },
    { "Name": "Crystal", "gender": "Female", "marks": [38, 48, 62, 89] },
]

const marks = [23, 67, 55, 43, 70, 54];
const positiveTestPassMark = 10;
const negativeTestPassMark = 80;

describe('005-json-world', () => {

    //to test isAllPass function
    describe('isAllPass()', () => {
        it('should be defined', () => {
            expect(isAllPass).toBeDefined();
        });
        it('should return true when all the marks are above minimum number', () => {
            let expectedOutput = true;
            let actualOutput = isAllPass(marks, positiveTestPassMark);
            expect(actualOutput).toBe(expectedOutput);
        });
        it('should return false when all the marks are below minimum number', () => {
            let expectedOutput = false;
            let actualOutput = isAllPass(marks, negativeTestPassMark); 
            expect(actualOutput).toBe(expectedOutput);
        });
    });
    fdescribe('getResult()', () => {
        it('should be defined', () => {
            expect(getResult).toBeDefined();
        });
        it('should return json object', () => {
            let sampleInput = testStudentData[0];
            let expectedOutput = { firstName: 'Ruchika', result: 'Pass' };
            let actualOutput = getResult(sampleInput);
            expect(actualOutput).toBe(expectedOutput);
        });
    });
});
