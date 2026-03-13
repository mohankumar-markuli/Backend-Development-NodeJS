/*
Step 1 → user1
Step 2 → User.prototype   ---> methods on that object
Step 3 → Object.prototype ----> inbuilt methods available for object
Step 4 -> null       ---------> property not fuound ---> return undefined

user1
 ├── name  (own)        user1.hasOwnProperty("name") -> true
 ├── age   (own)
 │
 ▼
User.prototype
 └── greet()  (inherited)   user1.hasOwnProperty("greet") -> false

*/

// Own Propeties Constructor Function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Alex", 25);
console.log(user1.name)

console.log(user1.hasOwnProperty("name"));

// Inherited Properties

User.prototype.greet = function () {
  console.log("Hello " + this.name);
};

user1.greet();
console.log(user1.hasOwnProperty("greet"));


for (let key in user1) {
  console.log("key", key)
  if (user1.hasOwnProperty(key)) {
    console.log("Own Preperties");
  }
  else{
    console.log("Inherited Preperties");
  }
}