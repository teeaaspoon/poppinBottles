var inputDollar = process.argv[2];
console.log(howManyBottles(inputDollar));

function howManyBottles(dollars) {
    var bottlesBought = Math.floor(dollars / 2);
    var bottleData = {
        fullBottles: bottlesBought,
        emptyBottles: 0,
        caps: 0,
        enhancedBreakdown: {
            totalBottles: 0,
            totalEarnedThrough: {
                emptyBottles: 0,
                caps: 0
            }
        }
    };

    var totalBottles = bottlesBought;
    //run a while loop while full bottles >1 or empty bottles>2 or caps >4
    while (
        bottleData["fullBottles"] >= 1 ||
        bottleData["emptyBottles"] >= 2 ||
        bottleData["caps"] >= 4
    ) {
        consume(bottleData);
        totalBottles += redeem(bottleData);
    }
    bottleData["enhancedBreakdown"]["totalBottles"] = totalBottles;
    console.log(
        "TOTAL BOTTLES: " +
            bottleData["enhancedBreakdown"]["totalBottles"] +
            "\n" +
            "REMAINING BOTTLES: " +
            bottleData["emptyBottles"] +
            "\n" +
            "REMAINING CAPS: " +
            bottleData["caps"] +
            "\n" +
            "TOTAL EARNED: " +
            "\n" +
            "    " +
            "BOTTLES: " +
            bottleData["enhancedBreakdown"]["totalEarnedThrough"][
                "emptyBottles"
            ] +
            "\n" +
            "    " +
            "CAPS: " +
            bottleData["enhancedBreakdown"]["totalEarnedThrough"]["caps"]
    );

    return bottleData;
}

function consume(bottleData) {
    bottleData["emptyBottles"] += bottleData["fullBottles"];
    bottleData["caps"] += bottleData["fullBottles"];
    bottleData["fullBottles"] = 0;
}

function redeem(bottleData) {
    var redeemed = 0;
    if (bottleData["emptyBottles"] >= 2) {
        var redeemFromEmpty = 0;
        redeemFromEmpty += Math.floor(bottleData["emptyBottles"] / 2);
        bottleData["enhancedBreakdown"]["totalEarnedThrough"][
            "emptyBottles"
        ] += redeemFromEmpty;
        redeemed += redeemFromEmpty;
        //calculates how many empty bottles were lost
        var bottlesLost = redeemFromEmpty * 2;
        bottleData["emptyBottles"] = bottleData["emptyBottles"] - bottlesLost;
    }
    if (bottleData["caps"] >= 4) {
        var redeemedFromCaps = 0;
        redeemedFromCaps += Math.floor(bottleData["caps"] / 4);
        bottleData["enhancedBreakdown"]["totalEarnedThrough"][
            "caps"
        ] += redeemedFromCaps;
        redeemed += redeemedFromCaps;
        var capsLost = redeemedFromCaps * 4;
        bottleData["caps"] = bottleData["caps"] - capsLost;
    }
    //set the full bottles to the amount redeemed
    bottleData["fullBottles"] = redeemed;
    return redeemed;
}

var howManyBottlesFunc = howManyBottles;
module.exports = howManyBottlesFunc;

// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
// Given these parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.

//redeem both at same time func
//5 full bottles, 0 empty, 0 caps
//0F,5E,5C
//redeem
//3F,1E,1C
//0F,4E,4C
//redeem
//3F,0E,0C
//0F,3E,3C
//redeem
//1F,1E,3C
//0F,2E,4C
//redeem
//2F,0E,0C
//0F,2E,2C
//redeem
//1F,0E,2C
//0F,1E,3C
