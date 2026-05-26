// BillDesk, RazorPay

interface PaymentProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
    processPayPal(amount: number): void;
    processBankTransfer(amount: number): void;  
}

class BillDesk implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log("Deducting Payment via CC")
    }
    processDebitCard(amount: number): void {
        console.log("Deducting Payment via DC")    
    }

    processPayPal(amount: number): void {
        throw new Error("Method not implemented.");
    }

    processBankTransfer(amount: number): void {
        throw new Error("Method not implemented.");
    }
}

class RazorPay implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log("Deducting Payment via CC")
    }
    processDebitCard(amount: number): void {
        console.log("Deducting Payment via DC")    
    }

    processPayPal(amount: number): void {
        console.log("Deducting Payment via PP")    
    }

    processBankTransfer(amount: number): void {
        throw new Error("Method not implemented.");
    }
}

