import { capitalize } from './capitalize';

test('capitalize first letter', () => {
  expect(capitalize('string')).toMatch('String');
});
test('capitalize first letter after numbers or symbols', () => {
  expect(capitalize('1-string')).toMatch('1-String');
});
test('capitalize first letter', () => {
  expect(capitalize('String')).toMatch('String');
});
test('capitalize first letter', () => {
  expect(capitalize(1)).toMatch('enter a valid string');
});
