function consoleLog(val) {
    console.log(val);
    return val;
}
consoleLog("Hello")

function doubleIt(num) {
    return num * 2;
}

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20);    
{prop:20}

doubleIt(10).toString()

objectMaker( doubleIt(100) );

{prop: 200}