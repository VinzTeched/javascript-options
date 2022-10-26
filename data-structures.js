const fruits = ['apple', 'mango', 'orange', 'pear', 'pineapple'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


console.log("");

const veggies = ['onions', 'garlic', 'potato'];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`)
});


const nums = [0, 10, 20, 30, 40, 50, 60];
nums.filter(function(num) {
    return num > 30;
});


[0, 10, 20, 30, 40, 50].map(function(num) {
    return num / 10;
})

console.log("")

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key) {
    result.push(key, drone[key]);
});
console.log(result);

console.log('')

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers)
console.log(bestBoxers.get(1))


const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log('\n', uniqueFruits);

