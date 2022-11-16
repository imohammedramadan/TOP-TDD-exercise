'use strict';
function isAlphabetLetter(letter) {
  return letter.match(/[A-Za-z]/);
}
//rotates from Z to A or from z to a
function alphabetRotation(letter) {
  if (letter.charCodeAt(0) === 122) {
    return 97;
  }
  if (letter.charCodeAt(0) === 90) {
    return 65;
  }
}

function caesarCipher(string) {
  let cipheredString = '';
  for (let index = 0; index < string.length; index++) {
    if (isAlphabetLetter(string[index])) {
      if (string[index] === 'Z' || string[index] === 'z') {
        cipheredString += String.fromCharCode(alphabetRotation(string[index]));
      }
      cipheredString += String.fromCharCode(string.charCodeAt(index) + 1);
    } else {
      cipheredString += string[index];
    }
  }
  return cipheredString;
}

export { caesarCipher };
