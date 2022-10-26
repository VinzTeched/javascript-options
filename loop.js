for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log();

var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log("")

for (var i = 10; i > 0; i--){
    console.log(i);
}
console.log("Happy new year!")

var counter = 3;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy new year!");

for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("------", month);
    }
}

console.log("\nMultiplication Table")
for(var i = 2; i <= 10; i++){
    for (var j = 1; j <= 12; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
    console.log("")
}


var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size:40px; border-radius:10px; border: 1px solid blue; background: pink;";
    console.log("%c" + cubes[i], styles);
}




