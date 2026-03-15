// One interface, many implementations.
// The same method name can behave differently depending on the object.

class Payment {
    pay() {
        console.log("Processing payment")
    }
}

class CreditCardPayment extends Payment {
    pay() {
        console.log("Paying using credit card")
    }
}

class PayPalPayment extends Payment {
    pay() {
        console.log("Paying using PayPal")
    }
}

const payments = [
    new CreditCardPayment(),
    new PayPalPayment()
]

payments.forEach(p => p.pay())