// ISP (Interface Segregation Principle) states that clients should not be forced to depend on interfaces they do not use. 
// In this example, we have separated the payment processing interfaces into smaller, 
// more specific interfaces, allowing classes to implement only the interfaces they need.

interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
    processBankTransfer(amount: number): void;
}

// Classes implementing only the interfaces they need
class CreditCardPayment implements CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class DebitCardPayment implements DebitCardPaymentProcessor {
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}

class PayPalPayment implements PayPalPaymentProcessor {
    processPayPal(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}


class RazorPayPaymentGateway implements BankTransferPaymentProcessor, DebitCardPaymentProcessor, CreditCardPaymentProcessor {
    processBankTransfer(amount: number): void {
        console.log(`Processing bank transfer payment of $${amount}`);
    }
    processCreditCard(amount: number): void {
        
        console.log(`Processing credit card payment of $${amount}`);        
    }
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}