/* prototype reading or modifying the prototype od an object

Object.getPrototypeOf()
Object.setPrototypeOf()
Object.create()

*/

// inspect prototype - Object.getPrototypeOf()
function User(name) {
  this.name = name;
}

const user1 = new User("Mohan");
console.log(Object.getPrototypeOf(user1));



// changing prototype - Object.setPrototypeOf()
const animal = {
  speak() {
    console.log("Animal makes sound");
  }
};

const dog = { 
    bark() {
    console.log("Dog barks");
  }
};

Object.setPrototypeOf(dog, animal); 
dog.speak();
dog.bark();

// create prototype - Object.create()

const animal1 = {
  speak() {
    console.log("Animal makes sound");
  }
};

const dog1 = Object.create(animal1);
dog.speak();
animal1.speak();

//example 2
const userMethods = {
  greet() {
    console.log("Hello " + this.name);
  }
};

const user2 = Object.create(userMethods);

user2.name = "Alex";
user2.greet();