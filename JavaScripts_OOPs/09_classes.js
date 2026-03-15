/*
 Classes in JavaScript are syntactic sugar over prototypes.
    ✔ Class methods automatically go into prototype
    ✔ Classes must be called with new
    ✔ Classes support inheritance easily
*/

class Car {

  // A constructor is a special method inside a class that runs automatically when a new object is created.
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(this.brand + " is driving");
  }

  brake() {
    console.log(this.brand + " stopped");
  }
}

/*
what happens when new is called\
    1. Create an empty object
    2. Set prototype → Car.prototype
    3. Call constructor()
    4. Return the object
*/

// car1 - instance of calss (object)
const car1 = new Car("Tesla", 200);


// drive() and break() -> instance methods 
car1.drive();
car1.brake();

// example2
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    console.log("Account created for " + owner);
  }
}

const acc1 = new BankAccount("Alex", 1000);

