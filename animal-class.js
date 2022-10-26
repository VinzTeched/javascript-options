class Animal {}
var myDog = Object.create(Animal)
console.log(Animal)

var dog = new Animal()
console.log(Animal)

class Bird extends Animal {}
class Eagle extends Bird{}
