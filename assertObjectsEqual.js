const eqObjects = (object1, object2) => {
  let keysOfObj1 = Object.keys(object1);
  let keysOfObj2 = Object.keys(object2);

  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }
  }
};
const assertObjectsEqual = function(actual, expected) {
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
//eqobjects should be false but here true why
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
