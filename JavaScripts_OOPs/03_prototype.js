// every object in JavaScript has a prototype
// prototype is another object that provides shared properties and methods

function User(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Hello " + this.name);
  };
}

// if you create 1000 users then JS creates 1000 copies of greet() ---> menory westage

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("Hello "+ this.name);
}

const person1 = new Person("Mohan",27);    
const person2 = new Person("Kumar",30);

person1.greet();    // person1 ---> prototype ----> greet()
person2.greet();    // person2 ---> prototype ----> greet()

console.log(person1.name);

console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(Object.prototype));


// Adding methods later

Person.prototype.sayAge = function(){
    console.log(this.age);
}

person1.sayAge(); 
