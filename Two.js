/*
* Conditionals, Functions, Scope and Loops.
 */
/*...*/

let storeA = 4.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal.")
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number;
    let subed = number - 19;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);
