// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    let code = String.fromCodePoint(9989);
    console.log(
      `${code}${code}${code}Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    let code = String.fromCodePoint(10062);

    console.log(
      `${code}${code}${code}Assertion Failed: ${actual} === ${expected}`
    );
  }
};
const head = (array) => {
  if (array.length === 0) {
    return undefined;
  } else if (Array.isArray(array[0])) {
    return array[0][0];
  } else {
    return array[0];
  }
};

//debugger;
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 2], 6, 7), 5);
