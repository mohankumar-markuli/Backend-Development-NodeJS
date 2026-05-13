// Using Constructor function

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.start = function () {
        console.log(`${this.make} ${this.model} is starting...`);
    };

    this.drive = function (speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    };
}

const camary = new Car("Toyota", "Camary", 2003);
const alto = new Car("Maruti", "Alto", 2020);

camary.start()
alto.start()

camary.make = "BMW";
camary.start = function () {
    console.log("The car broke down");
}
console.log(camary.make);
camary.start()

// Problems?
// Encapsulation