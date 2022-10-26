var test;

test = typeof("This is good");
test = typeof(18)
test = typeof(1.3)
test = typeof(true)
test = typeof(2 > 4)
test = typeof([1, 3, 4])
test = typeof({property: 1})
test = typeof(function abc() { console.log("abc")})

console.log(test)