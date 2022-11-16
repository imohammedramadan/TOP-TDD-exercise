import { calculator } from './calculator';

//calculator tests
test('calculator add two number', () => {
  expect(calculator.add(2, 4)).toStrictEqual(6);
});

test('calculator subtract two number', () => {
  expect(calculator.subtract(8, 2)).toStrictEqual(6);
});

test('calculator multiply two number', () => {
  expect(calculator.multiply(3, 2)).toStrictEqual(6);
});

test('calculator divide two number', () => {
  expect(calculator.divide(12, 2)).toStrictEqual(6);
});

test('calculator add number and string', () => {
  expect(calculator.add(2, '4')).toMatch('enter numbers only');
});

test('calculator subtract number and empty string', () => {
  expect(calculator.subtract(8, '')).toMatch('enter numbers only');
});

test('calculator multiply number and empty array', () => {
  expect(calculator.multiply(3, [])).toMatch('enter numbers only');
});

test('calculator divide number and array of numbers', () => {
  expect(calculator.divide(12, [2, 3, 4])).toMatch('enter numbers only');
});

test('calculator add number and array of one number', () => {
  expect(calculator.add(12, [2])).toMatch('enter numbers only');
});

test('calculator subtract number and null', () => {
  expect(calculator.subtract(8, null)).toMatch('enter numbers only');
});

test('calculator multiply number and boolean', () => {
  expect(calculator.multiply(3, true)).toMatch('enter numbers only');
});

test('calculator divide number and boolean', () => {
  expect(calculator.divide(12, false)).toMatch('enter numbers only');
});

test('calculator add number and undefined', () => {
  expect(calculator.add(12, undefined)).toMatch('enter numbers only');
});
