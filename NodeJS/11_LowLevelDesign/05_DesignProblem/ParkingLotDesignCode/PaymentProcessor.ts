// BillDesk Payment Gateway
// class BillDeskGateway {
//     processPayment(amount: number): void {
//       console.log(`Deducting Rs. ${amount}`);
//     }
// }



export class PaymentProcessor {
  #paymentGateway;
  constructor(paymentGateway) {
    this.#paymentGateway = paymentGateway;
  }
  processPayment(amount: number): void {
    this.#paymentGateway.processPayment(amount);
  }
}


//@ts-ignore
class RazorPayGateway {
    deductAmount(amountInPaisa: number): void {
      console.log(`Deducting Rs. ${amountInPaisa / 100}`);
    }
}

interface Gateway {
  processPayment(amount: number): void;
}

class BillDeskGateway implements Gateway{
    processPayment(amount: number): void {
      console.log(`Deducting Rs. ${amount}`);
    }
}

class RazorPayPaymentAdapter implements Gateway {
  private pg: RazorPayGateway;

  constructor(pg: RazorPayGateway) {
    this.pg = pg;
  }

  processPayment(processAmount: number): void {
    this.pg.deductAmount(processAmount * 100);
  }
}


// Old client code

// const pg = new BillDeskGateway();
// const paymentProcessor = new PaymentProcessor(pg);
// paymentProcessor.processPayment(100);

const pg = new RazorPayGateway();
const paymentProcessor = new RazorPayPaymentAdapter(pg);

paymentProcessor.processPayment(100);




