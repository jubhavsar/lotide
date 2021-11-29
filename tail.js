// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
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
const tail = (words) => {
  if(words.length === 0){
    return undefined;
  }
  let tailOfWords = [];
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      tailOfWords.push(words[i]);
    }
  }
  return tailOfWords;
};
module.exports = tail;


