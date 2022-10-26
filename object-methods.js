var car = {};
car.color = "pink";

car.turnKey = function() {
    console.log("Engine running");
}

var car2 = {};
car2.color = "red";
car2.mileage = 230424;
console.log(car2);
car2.turnTheKey = function() {
    console.log("Engine is running")
}
car2.lightsOn = function() {
    console.log("The light is on");
}
console.log(car2);
car2.turnTheKey();
car2.lightsOn();