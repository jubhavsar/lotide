// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      String.fromCodePoint(9989) +
        String.fromCodePoint(9989) +
        String.fromCodePoint(9989) +
        "Assertion Passed: " +
        actual +
        " === " +
        expected
    );
  } else {
    console.log(
      String.fromCodePoint(10062) +
        String.fromCodePoint(10062) +
        String.fromCodePoint(10062) +
        "Assertion failed: " +
        actual +
        " !== " +
        expected
    );
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 6);
