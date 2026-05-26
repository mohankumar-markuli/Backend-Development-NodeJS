
// Single Responsibility Principle (SRP) states that a class should have only one reason to change, meaning it should have only one job or responsibility.

class OrderProcessingService {
    constructor(paymentService, notificationService) {
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    createOrder(orderDetails) {
        // Logic to create an order
        console.log("Order created:", orderDetails);
    }

    processPayment(orderId, paymentDetails) {
        // Logic to process payment
        this.paymentService.processPayment(orderId, paymentDetails);
        console.log("Payment processed for order ID:", orderId);
    }

    sendEmailConfirmation(orderId, email) {
        // Logic to send email confirmation
        // Logic to send email confirmation
        // fetch the template --> Template Service
        // feeds the customer data --> User Service 

        // sends the email


        this.notificationService.sendEmailConfirmation(orderId, email);
        console.log("Email confirmation sent for order ID:", orderId, "to email:", email);
    }
}

class PaymentService {
    processPayment(orderId, paymentDetails) {
        // Logic to process payment
        console.log("Payment processed for order ID:", orderId);
    }
}

class NotificationService {
    sendEmailConfirmation(orderId, email) {
        // Logic to send email confirmation
        console.log("Email confirmation sent for order ID:", orderId, "to email:", email);
    }
}
