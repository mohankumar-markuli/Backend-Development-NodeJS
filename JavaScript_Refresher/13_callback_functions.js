//  callback functions
// take a function and pass to another function is called called callback function

setTimeout(function () {
  console.log("timer");
}, 5000);

// function declaration
function x(y) {
  console.log("print x");
  y();
}

// function y is the callback function (function call)
x(function y() {
  console.log("print y");
});

// Example code
// callback hell
// Inversion of control

const cart = ["item1", "item2", "item3"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.ShowOrderSummery();
  });
});
