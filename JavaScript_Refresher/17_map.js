// map
const arr = [5, 3, 6, 4];

function double(x) {
  return x * 2;
}

const output = arr.map(double);
const output2 = arr.map(function double(x) {
  return x * 2;
});

const output3 = arr.map((x) => x * 2);

console.log(output);
console.log(output2);
console.log(output3);
