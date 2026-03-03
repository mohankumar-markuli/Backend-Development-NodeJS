//  async function always returns a promise

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

async function getData() {
  return p;
}

const dataPromise = getData();
dataPromise.then((res) => console.log(res));

dataPromise.then(function (res) {
  console.log(res);
});

// ---------------------------------------------------
