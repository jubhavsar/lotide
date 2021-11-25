// TEST/ASSERTION FUNCTIONS
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

const assertArrayEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(value){
  const middleArray = [];
  const arraylength = value.length;
  // if array length less than 3 shoud return empty array.
  if(arraylength === 1 || arraylength === 2){
      return middleArray;
  }
 else if(arraylength % 2 !== 0){
      middleArray.push(value[Math.floor(arraylength/2)]);
      return middleArray;
  }
 else if(arraylength % 2 === 0){
  middleArray.push(value[(arraylength/2)-1]);
   middleArray.push(value[arraylength/2]);
  }
  return middleArray;
}

// TEST CODE
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]