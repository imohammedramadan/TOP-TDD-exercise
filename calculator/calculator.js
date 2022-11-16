'use strict';
function isValidNumbers(firstNum, secondNum) {
  if (typeof firstNum !== 'number') return false;
  if (typeof secondNum !== 'number') return false;
  return true;
}
const calculator = {
  add: (firstNum, secondNum) => {
    if (!isValidNumbers(firstNum, secondNum)) return 'enter numbers only';
    return firstNum + secondNum;
  },

  subtract: (firstNum, secondNum) => {
    if (!isValidNumbers(firstNum, secondNum)) return 'enter numbers only';
    return firstNum - secondNum;
  },

  multiply: (firstNum, secondNum) => {
    if (!isValidNumbers(firstNum, secondNum)) return 'enter numbers only';
    return firstNum * secondNum;
  },

  divide: (firstNum, secondNum) => {
    if (!isValidNumbers(firstNum, secondNum)) return 'enter numbers only';
    return firstNum / secondNum;
  },
};

export { calculator };
