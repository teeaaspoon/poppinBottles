var howManyBottles = require("./poppinbottles.js");
var assert = require("chai").assert;

console.log(howManyBottles(10));
describe("howManyBottles", function() {
    it("should return 15", function() {
        var result = howManyBottles(10);
        assert.equal(result, 15);
    });

    it("should return 35", function() {
        var result = howManyBottles(20);
        assert.equal(result, 35);
    });

    it("should return 55", function() {
        var result = howManyBottles(30);
        assert.equal(result, 55);
    });

    it("should return 75", function() {
        var result = howManyBottles(40);
        assert.equal(result, 75);
    });
});
