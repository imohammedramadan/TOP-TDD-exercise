import { analyzeArray } from './analyzeArray';

test('array returns object containing values', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('array contains string', () => {
  expect(analyzeArray([1, 8, 3, 'hi', 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains null', () => {
  expect(analyzeArray([1, 8, 3, null, 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains true', () => {
  expect(analyzeArray([1, 8, 3, true, 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains false', () => {
  expect(analyzeArray([1, 8, 3, false, 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains undefined', () => {
  expect(analyzeArray([1, 8, 3, undefined, 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains empty string', () => {
  expect(analyzeArray([1, 8, 3, '', 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('array contains empty index', () => {
  expect(analyzeArray([1, 8, 3, , 4, 2, 6])).toMatch(
    'enter an array of numbers'
  );
});

test('empty array', () => {
  expect(analyzeArray([])).toMatch('enter an array of numbers');
});
