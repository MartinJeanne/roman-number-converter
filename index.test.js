class RomanConverter {

    constructor() {
        this.convertedRomanNumber = '';

        this.romanNumbers = new Map();
        this.romanNumbers.set(1, 'I');
        this.romanNumbers.set(4, 'IV');
        this.romanNumbers.set(5, 'V');
        this.romanNumbers.set(9, 'IX');
        this.romanNumbers.set(10, 'X');
        this.romanNumbers.set(40, 'XL')
        this.romanNumbers.set(50, 'L');
        this.romanNumbers.set(90, 'XC');
        this.romanNumbers.set(100, 'C');
        this.romanNumbers.set(400, 'CD');
        this.romanNumbers.set(500, 'D');
        this.romanNumbers.set(900, 'CM');
        this.romanNumbers.set(1000, 'M');
    }

    arabicToRoman = (givenArabicNumber) => {
        for (let [arabicNumber, romanNumber] of Array.from(this.romanNumbers).reverse()) {
            if (arabicNumber <= givenArabicNumber) {
                this.convertedRomanNumber += romanNumber;

                if (givenArabicNumber - arabicNumber == 0)
                    return this.convertedRomanNumber;
                else
                    return this.arabicToRoman(givenArabicNumber - arabicNumber);
            }
        }
    }
}

test('Passing 1 should return I', () => {
    expect(new RomanConverter().arabicToRoman(1)).toBe('I');
});

test('Passing 5 should return V', () => {
    expect(new RomanConverter().arabicToRoman(5)).toBe('V');
});

test('Passing 10 should return X', () => {
    expect(new RomanConverter().arabicToRoman(10)).toBe('X');
});

test('Passing 50 should return L', () => {
    expect(new RomanConverter().arabicToRoman(50)).toBe('L');
});

test('Passing 100 should return C', () => {
    expect(new RomanConverter().arabicToRoman(100)).toBe('C');
});

test('Passing 100 should return D', () => {
    expect(new RomanConverter().arabicToRoman(500)).toBe('D');
});

test('Passing 100 should return M', () => {
    expect(new RomanConverter().arabicToRoman(1000)).toBe('M');
});

test('Passing 2 should return II', () => {
    expect(new RomanConverter().arabicToRoman(2)).toBe('II');
});

test('Passing 3 should return III', () => {
    expect(new RomanConverter().arabicToRoman(3)).toBe('III');
});

test('Passing 6 should return VI', () => {
    expect(new RomanConverter().arabicToRoman(6)).toBe('VI');
});

test('Passing 4 should return IV', () => {
    expect(new RomanConverter().arabicToRoman(4)).toBe('IV');
});

test('Passing 9 should return IX', () => {
    expect(new RomanConverter().arabicToRoman(9)).toBe('IX');
});

test('Passing 24 should return XXIV', () => {
    expect(new RomanConverter().arabicToRoman(24)).toBe('XXIV');
});

test('Passing 34 should return XXXIV', () => {
    expect(new RomanConverter().arabicToRoman(34)).toBe('XXXIV');
});

test('Passing 40 should return XL', () => {
    expect(new RomanConverter().arabicToRoman(40)).toBe('XL');
});

test('Passing 41 should return XLI', () => {
    expect(new RomanConverter().arabicToRoman(41)).toBe('XLI');
});

test('Passing 54 should return LIV', () => {
    expect(new RomanConverter().arabicToRoman(54)).toBe('LIV');
});

test('Passing 79 should return LXXIX', () => {
    expect(new RomanConverter().arabicToRoman(79)).toBe('LXXIX');
});

test('Passing 90 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(90)).toBe('XC');
});

test('Passing 94 should return XCIV', () => {
    expect(new RomanConverter().arabicToRoman(94)).toBe('XCIV');
});

test('Passing 96 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(96)).toBe('XCVI');
});

test('Passing 99 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(99)).toBe('XCIX');
});

test('Passing 100 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(100)).toBe('C');
});

test('Passing 104 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(104)).toBe('CIV');
});

test('Passing 199 should return XC', () => {
    expect(new RomanConverter().arabicToRoman(199)).toBe('CXCIX');
});

test('Passing 399 should return CCCXCIX', () => {
    expect(new RomanConverter().arabicToRoman(399)).toBe('CCCXCIX');
});

test('Passing 400 should return CD', () => {
    expect(new RomanConverter().arabicToRoman(400)).toBe('CD');
});