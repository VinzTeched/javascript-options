class Car {
    constructor (color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("turbo is on!")
    }
}

var car1 = new Car("red", 900);
//car1.turboOn();
console.log(car1.color)

