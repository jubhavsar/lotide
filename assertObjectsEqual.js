const eqObjects = (object1, object2) => {
  let keysOfObj1 = Object.keys(object1);
  let keysOfObj2 = Object.keys(object2);
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }

  for (const key of keysOfObj1) {
    const object1Value = object1[key];
    const object2Value = object2[key];
    if (
      (Array.isArray(object1Value) &&
        object1Value.length !== object2Value.length) ||
      (!Array.isArray(object1Value) && object1Value !== object2Value)
    ) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false