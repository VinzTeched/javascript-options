var die //= new Math();
//console.log(die)

var date = new Date();
console.log(date)

function Icecream(flavour) {
    this.flavour = flavour;
    this.meltit = function () {
        console.log(`The ${this.flavour} icecream is melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple")

console.log(kiwiIcecream)
appleIcecream