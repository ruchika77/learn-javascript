// importing all the functions which you need to test
const { greetings, helloWorld, add } = require('./hello.js');

describe('greetings()', function () {
    it('should be defined', function () {
        expect(greetings).toBeDefined();
    });

    it('should return string "Good morning Ruchi" ', function () {
        const result = greetings();
        expect(result).toBe("Good morning Ruchi");
    })
});

describe('add()', function () {
    it('should be defined', () => {
        expect(add).toBeDefined();
    });

    it('should add two numbers', () => {
        expect(add(1, 1)).toBe(2);
        expect(add(3, 4)).toBe(7);
        expect(add(1, 3)).toBe(4);
    });
});
