// Hiding complex internal implementation and exposing only the necessary functionality.

class Car {
  start() {
    this.#igniteEngine()
    console.log("Car started")
  }

  #igniteEngine() {
    console.log("Engine ignition process")
  }
}

const car1 = new Car()

car1.start()


// example 2

class Payment {
  pay(amount) {
    this.#processPayment(amount)
    console.log("Payment successful")
  }

  #processPayment(amount) {
    console.log("Processing payment of " + amount)
  }
}

const payment = new Payment()

payment.pay(100)