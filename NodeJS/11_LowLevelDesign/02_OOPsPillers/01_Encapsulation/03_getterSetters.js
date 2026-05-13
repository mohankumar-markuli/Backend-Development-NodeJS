// Access to private variables
class Car {

    #make;          // Private variable

    constructor(make, model, year) {
        this.#make = make;
        this.model = model;
        this.year = year;
    }

    getMake() {
        return this.#make;
    }

    setMake(make) {
        this.#make = make;
    }

    injectFuel() {
        // Inject Petrol to engine

        console.log("Injecting fuel to engine");
    }

    #igniteSparkPlug() {
        console.log("Adding fire to fuel");
    }

    start() {
        this.#injectFuel();
        this.#igniteSparkPlug();
        console.log(`${this.#make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.#make} ${this.model} is driving at ${speed} km/h.`);
    }


}

const camary = new Car("Toyota", "Camary", 2003);

camary.start();

camary.setMake = console.log;
console.log(camary.getMake());

camary.setMake("Hello");