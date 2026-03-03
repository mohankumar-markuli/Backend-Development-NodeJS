{
  var a = 10; // global scope
  let b = 20; // block scope
  const c = 30; // block scope

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
// console.log(b);
// console.log(c);
// shadowing

let value = 50;
{
  let value = 20;
  console.log(value);
}
console.log(value);

const value2 = 5000;
{
  const value2 = 2000;
  console.log(value2);
}
console.log(value2);
