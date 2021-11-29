const assertArraysEqual = require("./assertArraysEqual");
// ACTUAL FUNCTION
const middle = function(value) {
  const middleArray = [];
  const arraylength = value.length;
  // if array length less than 3 shoud return empty array.
  if (arraylength === 1 || arraylength === 2) {
    return middleArray;
  } else if (arraylength % 2 !== 0) {
    middleArray.push(value[Math.floor(arraylength / 2)]);
    return middleArray;
  } else if (arraylength % 2 === 0) {
    middleArray.push(value[arraylength / 2 - 1]);
    middleArray.push(value[arraylength / 2]);
  }
  return middleArray;
};
module.exports = middle;
