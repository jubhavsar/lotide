// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')
const head = (array) => {
  if (array.length === 0) {
    return undefined;
  } else if (Array.isArray(array[0])) {
    return array[0][0];
  } else {
    return array[0];
  }
};
module.exports = head;

