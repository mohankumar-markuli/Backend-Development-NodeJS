// By just defining an object
// Creating Objects using Object Literal

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    start: function () {
        console.log(`${this.make} ${this.model} is starting...`);
    },
    drive: function (speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
};

car.start();
car.drive(10);
car.make = "Maruti";
car.start()


// Problems?
// 1. No class: No structure
// 2. Mutable
// 3. Multiple objects can't be created. Can be created but will lead to lot of duplication
