var fruits = [];
fruits.push("apple");
fruits.push("pear");
console.log(fruits)

fruits.pop(); // remove last item in array
console.log(fruits)

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder("mango", "pineapple", "orange");
