const assert = require("chai").assert;
const tail = require("../tail");
describe("#Test cases for function", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(["5"]), []);
  });
  it("Return ['Lighthouse', 'Labs'] for ['Hello','Lighthouse', 'Labs']", function () {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });
});
