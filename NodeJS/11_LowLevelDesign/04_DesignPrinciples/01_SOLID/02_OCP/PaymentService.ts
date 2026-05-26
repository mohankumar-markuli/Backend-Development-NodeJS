
// OCP stands for Open-Closed Principle.

// If there is no interface. 
// Eac of the child class should overrride the deductAmount Method
// class PaymentMethod {
//     deductAmount(amount: number): void {
//         throw new Error("Not a supported Payment Type")
//     }
// }

interface PaymentMethod {
    deductAmount(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    deductAmount(amount: number): void {
        console.log("Processing credit card payment of amount:", amount);
    }   
}

class DebitCardPayment implements PaymentMethod {
    deductAmount(amount: number): void {
        console.log("Processing debit card payment of amount:", amount);
    }   
}

class BitcoinPayment implements PaymentMethod {
    deductAmount(amount: number): void {
        console.log("Processing BTC payment of amount:", amount);
    }   
}

class InternetBankingPayment implements PaymentMethod {
    deductAmount(amount: number): void {
        console.log("Processing IB payment of amount:", amount);
    }   
}


class PaymentServiceOCP {
    paymentMethod: PaymentMethod;
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount: number) {
        this.paymentMethod.deductAmount(amount);
    }
}


// Main Code
const creditCardPayment = new CreditCardPayment();
const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();
const paymentService = new PaymentServiceOCP(creditCardPayment);
paymentService.deductAmount(1000);
