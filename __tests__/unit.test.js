// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// phone numbers
test('valid phoneNumber', () => {
    expect(functions.isPhoneNumber('858-420-6969')).toBe(true);
});
test('valid  phoneNumber', () => {
    expect(functions.isPhoneNumber('416-223-7777')).toBe(true);
});
  
test('invalid phoneNumber letters', () => {
    expect(functions.isPhoneNumber('4162237777')).toBe(false);
});

test('invalid phoneNumber length', () => {
    expect(functions.isPhoneNumber('zza958-40a920-10aow94')).toBe(false);
});

// emails

test('valid email', () => {
    expect(functions.isEmail('himom@gmail.com')).toBe(true);
});
test('valid email', () => {
    expect(functions.isEmail('ilikecats123@ucsd.edu')).toBe(true);
});
  
test('invalid email tilda', () => {
    expect(functions.isEmail('how~~have@ucsd.edu')).toBe(false);
});

test('invalid email missing @', () => {
    expect(functions.isEmail('theresnoAtgmail.com')).toBe(false);
});

// strong passwords

test('valid strong pw', () => {
    expect(functions.isStrongPassword('SJDawjAO123')).toBe(true);
});
test('valid strong pw', () => {
    expect(functions.isStrongPassword('a193maI__W')).toBe(true);
});
  
test('invalid strong pw just numbers', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
});

test('invalid strong pw too short', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

// date

test('valid date', () => {
    expect(functions.isDate('07/07/2021')).toBe(true);
});
test('valid date', () => {
    expect(functions.isDate('3/8/1999')).toBe(true);
});
  
test('invalid date too long', () => {
    expect(functions.isDate('69696/01/2040')).toBe(false);
});

test('invalid date missing slash', () => {
    expect(functions.isDate(12/292000)).toBe(false);
});

// hexcolor

test('valid hex', () => {
    expect(functions.isHexColor('A15342')).toBe(true);
});
test('valid hex', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
});
  
test('invalid hex too many digits', () => {
    expect(functions.isHexColor('ABCABCABC')).toBe(false);
});

test('invalid hex incorrect letters', () => {
    expect(functions.isHexColor('ZZZZZZ')).toBe(false);
});



