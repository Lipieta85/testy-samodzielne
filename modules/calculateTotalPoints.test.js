const assert = require("assert");
const totalPoints = require("./calculateTotalPoints");

describe("totalPoints", () => {

    it("should return totalPoints - normal hill", () => {
        const actual = totalPoints( "normal", 111, 98, [18.0, 17.5, 19.5, 16.5, 15.0], -13.2, 6.4 );
        const expected = 131.2;
        assert.equal(actual, expected);
    });

    it("should return totalPoints - large hill", () => {
        const actual = totalPoints( "large", 134, 120, [20, 20, 20, 20, 20], -0.5, 0 );
        const expected = 144.7;
        assert.equal(actual, expected);
    });

    it("should return totalPoints - extra large hill", () => {
        const actual = totalPoints( "xLarge", 227.5, 200, [16.5, 19.0, 19.0, 19.0, 20], -11.2, 0 );
        const expected = 198.8;
        assert.equal(actual, expected);
    });

});