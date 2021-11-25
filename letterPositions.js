const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};
const letterPositions = function (sentence) {
  let objCountLtr = {};
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i]!==" "){
    if (objCountLtr[sentence[i]]) {
        objCountLtr[sentence[i]].push(i);
    } else {
        objCountLtr[sentence[i]] = [i];
    }
  }
  }
  return objCountLtr;
};
//debugger;
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);