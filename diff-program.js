// functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}
var toPay = totalPrice(shoes, stateTax);
console.log('Total price:', toPay);


// OOP 1
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();


// OOP 2
var purchase2 = {
    shoes: 60,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();