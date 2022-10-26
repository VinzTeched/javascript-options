try {
    throw new Error();
    console.log("hello")
} catch (err) {
    console.log("goodbye")
}

var str = "Hello";
str.match("jello")

try {
    Number(5).toPrecision(300);
} catch (err) {
    console.log("There was an error")
}