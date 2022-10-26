const bicycle = {
    bell: function () {
        return "Ring, ring! Watch out please!"
    }
}

const door = {
    bell: function () {
        return "Ring, ring! Come here please!"
    }
}

bicycle.bell()
door.bell()

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle)
ringTheBell(door)

var strcoc = "abc".concat("def");
console.log(strcoc)
var arrcoc = ["abc"].concat(["def"])
console.log(arrcoc)
var arr = ["abc"] + ["def"]
console.log(arr)