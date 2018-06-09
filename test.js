var howManyBottles = require("./poppinbottles.js");
var assert = require("chai").assert;

console.log(howManyBottles(10));
describe("howManyBottles", function() {
    it("should return 15", function() {
        var result = howManyBottles(10);
        assert.equal(result, 15);
    });
});
