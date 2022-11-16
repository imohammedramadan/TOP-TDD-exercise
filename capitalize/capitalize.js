'use strict';

function capitalize(string) {
  if (typeof string !== 'string') {
    return 'enter a valid string';
  }
  const charsRegEx = /[A-Za-z]/;
  for (let index = 0; index < string.length; index++) {
    if (string[index].match(charsRegEx)) {
      return string.replace(string[index], string[index].toUpperCase());
    }
  }
}

export { capitalize };
