const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
assertArraysEqual(eqArrays([], []),true); // => true
assertArraysEqual(eqArrays([1, 2, "3"], [1, 2, 3]),false); // => false
