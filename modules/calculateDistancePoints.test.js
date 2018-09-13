const assert = require("assert");
const distancePoints = require("./calculateDistancePoints");

describe("distancePoints", () => {

    describe("normalHill", () => {
        it("should return a number when point K is passed", () => {
            const actual = distancePoints("normal", 111, 98);
            const expected = 86;
            assert.equal(actual, expected);
        });
        it("should return a number when point K is not passed", () => {
            const actual = distancePoints("normal", 93, 98);
            const expected = 50;
            assert.equal(actual, expected);
        });
    });

    describe("largeHill", () => {
        it("should return a number when point K is passed", () => {
            const actual = distancePoints("large", 134, 120);
            const expected = 85.2;
            assert.equal(actual, expected);
        });
        it("should return a number when point K is not passed", () => {
            const actual = distancePoints("large", 119, 120);
            const expected = 58.2;
            assert.equal(actual, expected);
        });
    });

    describe("extraLargeHill", () => {
        it("should return a number when point K is passed", () => {
            const actual = distancePoints("xLarge", 227.5, 200);
            const expected = 153;
            assert.equal(actual, expected);
        });
        it("should return a number when point K is not passed", () => {
            const actual = distancePoints("xLarge", 199, 200);
            const expected = 118.8;
            assert.equal(actual, expected);
        });
    });
});