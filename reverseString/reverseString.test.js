import { reverseString } from './reverseString';

//string reverse test
test('reverse a string', () => {
  expect(reverseString('string')).toMatch('gnirts');
});
