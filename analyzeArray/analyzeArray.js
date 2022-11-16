'use strict';
function isArrayOfNumbers(array) {
  if (!Array.isArray(array)) return false;
  if (array.length === 0) return false;

  for (const item of array) {
    if (typeof item != 'number') {
      return false;
    }
  }
  return true;
}

function analyzeArray(array) {
  if (!isArrayOfNumbers(array)) {
    return 'enter an array of numbers';
  }

  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const sum = array.reduce((prev, curr) => (prev += curr), 0);
  const average = sum / length;

  return { average: average, min: min, max: max, length: length };
}

export { analyzeArray };
