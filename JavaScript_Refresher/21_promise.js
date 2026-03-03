// /*

// earlier solutions - callback function attacked with API
// resulting inversion of control and callback hell issue

const cart = ["item1", "item2", "item3", "item4"];

craeteOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummery(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// promise object
// represents eventual completion of asyncronous operations

const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

//  promise chaining

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    showOrderSummery(paymentInfo);
  })
  .then(function (paymentInfo) {
    updateWalletBalance(paymentInfo);
  });

// can also written using arrow function

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummery(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

// */

const GITHUB_API = "https://api.github.com/users/mohankumar-markuli";

const user = fetch(GITHUB_API);
console.log(user);

user.then(function (data) {
  console.log(data);
});
