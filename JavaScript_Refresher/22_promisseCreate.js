const cart = ["item1", "item2", "item3", "item4"];

creatOrder(cart)
  .then(function (orderid) {
    console.log(orderid);
    return orderid;
  })
  .then(function (orderid) {
    return proceedToPayment(orderid);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderid) {
    console.log("No matter what happens i will be called");
  });

//  Promise producer
function creatOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validateCart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("resolve successful");
  });
}

function validateCart(cart) {
  return false;
}
