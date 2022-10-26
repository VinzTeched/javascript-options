const car = {
    speed: 100,
    color: "blue"
}
// for (prop of car) {
//  console.log(prop)
// }

const colors = ["red", "orange", "yellow"]
for (var color of colors) {
    console.log(color)
}

const car2 = {
    speed: 300,
    color: 'red'
}
console.log(Object.keys(car2))

const car3 = {
    speed: 200,
    color: "yellow"
}
console.log(Object.values(car3))

const car4 = {
    speed: 400,
    color: "magenta"
}
console.log(Object.entries(car4))

var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}
for (key of Object.keys(clothingItem)) {
    console.log('keys', ":", clothingItem[key])
}

function testBracketDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed": "color";

    var drone = {
        speed: 15,
        color: "orange"
    }
    console.log(drone[dynamicKey]);
}
testBracketDynamicAccess();