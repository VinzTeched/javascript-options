// Join two arrays
const fruits = ['apple', 'pear', 'orange'];
const berries = ['blueberry', 'strawberry'];
const fruitAndBerries = [...fruits, ...berries];
console.log(fruitAndBerries);

// join objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar)

// add new members to array without push
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies)

// convert string to array
const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars)

// copy an object into another one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

// copy array into another one
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits];
fruits1.pop()
console.log(fruits1, "not", fruits2)


const meal = ["soup", "steak"];
let [starter] = meal;
console.log(starter)

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers))