var x = 1;
console.log(x)
a();
b();
console.log(x)

function a(){
    var x = 100;
    console.log(x)
    b();
}

function b(){
    x = 200;
    console.log(x)
}

console.log(x)