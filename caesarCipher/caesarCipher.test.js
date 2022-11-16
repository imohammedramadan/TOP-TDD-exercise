import { caesarCipher } from './caesarCipher';

//caesar cipher tests
test('cipher a text using caesar cipher', () => {
  expect(caesarCipher('Hello! how are you?!')).toMatch('Ifmmp! ipx bsf zpv?!');
});

test('cipher a text using caesar cipher', () => {
  expect(
    caesarCipher("Well. That's not what i said, and i didn't want to say that!")
  ).toMatch("Xfmm. Uibu't opu xibu j tbje, boe j ejeo'u xbou up tbz uibu!");
});

test('cipher a text using caesar cipher', () => {
  expect(caesarCipher('az')).toMatch('ba');
});

test('cipher a text using caesar cipher', () => {
  expect(caesarCipher('aZ')).toMatch('bA');
});

test('cipher a text using caesar cipher', () => {
  expect(
    caesarCipher('1 your god is the only god, 2 the hassan and hussain')
  ).toMatch('1 zpvs hpe jt uif pomz hpe, 2 uif ibttbo boe ivttbjo');
});

test('cipher a text using caesar cipher', () => {
  expect(
    caesarCipher('-1 your god is the only god, -2 the hassan and hussain')
  ).toMatch('-1 zpvs hpe jt uif pomz hpe, -2 uif ibttbo boe ivttbjo');
});
