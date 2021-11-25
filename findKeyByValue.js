const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
const findKeyByValue = (bestTVShowsByGenre, nameOfshow) => {
  let position;
  let keysOfShow = Object.keys(bestTVShowsByGenre);
  let valueOfShow = Object.values(bestTVShowsByGenre);
  for (let i = 0; i < valueOfShow.length; i++) {
    if (nameOfshow === valueOfShow[i]) {
      position = i;
    }
  }
  for (let i = 0; i < keysOfShow.length; i++) {
    if (i === position) {
      return keysOfShow[i];
    }
  }
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
