var a = 20;

function b(){
    a = 2000;
    console.log(a);
}

// console.log(window.a);  // only on chrome V8 engine
console.log(a);
console.log(globalThis.a)
console.log(this.a)
b()
console.log(this.a)
console.log(a);

