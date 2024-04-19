//Method1
function f1(f){
    console.log("Hello f1");
    f();    //prints the message of f2
}

function f2(){
    console.log("Hello f2");
}

f1(f2); //callback function => passing function f2 as a argument to function f1


//Method2
function f3(f){
    console.log("Hello f3");
    f();
}

f3(function(){
    console.log("argument of f3");
})
