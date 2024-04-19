function fAdd(x, y){
    var a;
    var b;

    a = x;
    b = y;

    var result = a + b;
    return result;
    console.log("Byee!");    //statements after return will not be print as return is considered as last statement
}

console.log(fAdd(20, 5));
//or
var output = fAdd(20, 5);
console.log(output);