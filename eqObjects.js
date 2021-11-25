const eqObjects = (object1, object2)=> {
let keysOfObj1 = Object.keys(object1);
let keysOfObj2 = Object.keys(object2);

if(keysOfObj1.length!==keysOfObj2.length){
return false;
}

for(const key in object1){
  if(object1[key]!==object2[key]){ 
    return false;
  }else {
    return true;
  }
}
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      `✅✅✅Assertion Passed: ${actual} === ${expected}`
    );
  } else {
    console.log(
      `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`
    );
  }
};
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false