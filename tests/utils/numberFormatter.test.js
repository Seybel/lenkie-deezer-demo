import { formatFanNumber } from "../../src/utils/numberFormatter.js";

describe('formatFanNumber', () => {
    // Tests that a number less than 1000 returns the number as a string
    it('tests that number less than 1000 returns the number', () => {
        expect(formatFanNumber(999)).toBe('999');
    });

    // Tests that a number greater than or equal to 1000 returns the number divided by 1000 and suffixed with 'K'
    it(`tests that number greater than or equal to 1000 returns the number divided by 1000 and suffixed with 'K'`, () => {
        expect(formatFanNumber(1000)).toBe('1K');
        expect(formatFanNumber(300000)).toBe('300K');
    });

    // Tests that a string that cannot be parsed as a number returns the string as it is
    it('tests that string that cannot be parsed as a number returns the string', () => {
        expect(formatFanNumber('abc')).toBe('abc');
    });

    // Tests that a negative number returns the absolute value of the number as a string
    it('tests negative number', () => {
        expect(formatFanNumber(-123)).toBe('123');
    });

    // Tests that a number with decimal places rounds down to the nearest integer
    it('tests decimal places round down', () => {
        expect(formatFanNumber(123.456)).toBe('123');
    });
});
