//import functions
const { getGenderCounts } = require('./get-gender-count.js');
//var allStudents = require('E:/Ruchi/jupyter-notebooks/data/student-data.json');

describe('005-json-world', () => {
    
    //to test getGenderCounts function
    describe('getGenderCounts()', () => {
        it('should be defined', () => {
            expect(getGenderCounts).toBeDefined();
        });
        it('should return json of female and male', () => {
            expect(getGenderCounts(allStudents)).toEqual({Female :243, Male : 257});
            /*expect(getGenderCounts("kiwi")).toBe(true);
            expect(getGenderCounts("truck")).toBe(true);
            expect(getGenderCounts("orange")).toBe(true);
*/
        });
    });
});
