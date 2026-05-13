// ES6 ==> Class

class Car {
    #make;
    constructor(make, model, year) {
        this.#make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.#make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.#make} ${this.model} is driving at ${speed} km/h.`);
    }

}

// Creating an instance of Car
const myCar = new Car("Toyota", "Camry", 2023);
myCar.model = "E300";
myCar.make = "BMW";
myCar.#make = "BMW";


myCar.start();

