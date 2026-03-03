const student = [
  { firstName: "Mohan", lastName: "Kumar", age: 35 },
  { firstName: "Mohan", lastName: "Kumar", age: 29 },
  { firstName: "Mohan", lastName: "Kumar", age: 49 },
  { firstName: "Mohan", lastName: "Kumar", age: 29 },
];

// map function implementation
const map_output = student.map(function displayFullName(arr) {
  return arr.firstName + " " + arr.lastName;
});
console.log(map_output);

// filter function implementation
const filter_output = student.filter(function age(arr) {
  return arr.age > 30;
});
console.log("filter", filter_output);

// reduce function implementation

function fetch_data(collection, operation) {
  output_collection = [];
  collection.reduce(
    (acc, corr) => output_collection.push(operation(corr)),
    output_collection,
  );
  return output_collection;
}

function fullName(objCollection) {
  return objCollection.firstName + " " + objCollection.lastName;
}

console.log(fetch_data(student, fullName));

// reduce to count values in object collection

const ageCount = student.reduce(function ageCount(acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);
