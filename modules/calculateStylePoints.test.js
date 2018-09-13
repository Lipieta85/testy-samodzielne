const assert = require("assert");
const stylePoints = require("./calculateStylePoints");

describe("stylePoints", () => {

  it("should return sum stylePoints without max and min points", () => {
    const actual = stylePoints([18.0, 17.5, 19.5, 16.5, 15.0]);
    const expected = 52;
    assert.equal(actual, expected);
  });

});