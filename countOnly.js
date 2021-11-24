const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  let counter = 0;
  let objEntry = Object.entries(itemsToCount);
  for (let i = 0; i < objEntry.length; i++) {
    for (const item of allItems) {
      if (item === objEntry[i][0] && objEntry[i][1] === true) {
        counter++;
        results[objEntry[i][0]] = counter;
      }
    }
    counter = 0;
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
