const takeUntil = (array, callback) => {
  let dataNew = [];
  for (let element of array) {
    if (callback(element)) {
      return dataNew;
    } else {
      dataNew.push(element);
    }
  }
  return dataNew;
};
const assertArrayEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
assertArrayEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true); //=> True
console.log("---");
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
// don't know how to use assertArrayEqual(results2,true);
assertArrayEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"]), true); //=> True
