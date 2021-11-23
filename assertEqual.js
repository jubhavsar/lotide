// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    let code = String.fromCodePoint(9989);
    console.log(
      `${code}${code}${code}Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    let code = String.fromCodePoint(10062);

    console.log(
      `${code}${code}${code}Assertion Failed: ${actual} !== ${expected}`
    );
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 6);
