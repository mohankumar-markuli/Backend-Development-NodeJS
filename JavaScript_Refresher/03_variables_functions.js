var x = 1;
a();
b();
console.log(x)

function a(){
    var x = 100;
    console.log(x)
    b();
}

function b(){
    var x = 200;
    console.log(x)
}