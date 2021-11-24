const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (array1, array2) => {
  debugger;
  count = 0;
  if (array1.length === array2.length) {
    let commonLength = array1.length;
    for (let i = 0; i < commonLength; i++) {
      if (array1[i] === array2[i]) {
        count++;
      }
    }
    if (count === commonLength) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 1, 1]), true); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS