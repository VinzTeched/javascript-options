var storeManager = {}
storeManager .rangeTilesPerTurn = 4;
storeManager .socialSkills = 50;
storeManager .streetSmarts = 50;
storeManager .health = 30;
storeManager .specialAbility = "finding business opportunities";
storeManager .greeting = "Let's make some money";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40, 
}

storeManager .nextAchievement = "open new store";
assistantManager.nextAchievement = "get promoted";

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table)
console.log(table.color)

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house)
house.windows = 10;
console.log(house)
house.windows = 11;
console.log(house)
