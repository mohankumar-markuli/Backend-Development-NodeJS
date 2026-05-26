// Conditionals are the bigggest anti pattern
// OCP: Open for EXTENSION but closed for MODIFICATION
class Paymentservice {
    deductAmount(paymentType, amount) {

        if (paymentType == "creditcard") {
            // Logic to process credit card payment
            console.log("Processing credit card payment of amount:", amount);
        } else if (paymentType == "debitcard") {
            // Logic to process debit card payment
            console.log("Processing debit card payment of amount:", amount);
        } else if (paymentType == "bitcoin") {
            // Logic to process bitcoin payment
            console.log("Processing bitcoin payment of amount:", amount);
        } else {
            console.log("Invalid payment type");
        }
    }
}


