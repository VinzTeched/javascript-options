var shoes = 100;
var stateTax = 1.1;
function totalPrice(price, tax) {
    return price * tax;
} 

var dollar = 100;
var naira = 0;
var exchangeRate = 720;

function convertCurrency(amount, rate) {
    return amount * rate;
}
naira = convertCurrency(dollar, exchangeRate);
console.log(naira);