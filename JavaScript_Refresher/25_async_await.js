const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved value1"), 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved value2"), 5000);
});

async function handlePromise() {
  console.log("Start promise 1");
  // js engine waits for the promise to resolve
  const val1 = await p1;
  console.log("hello promise 1");
  console.log(val1, "pointer 01");

  console.log("Start promise 2");
  // js engine waits for the promise to resolve
  const val2 = await p2;
  console.log("hello promise 2");
  console.log(val2, "pointer 02");
}
handlePromise();

async function handlePromise1() {
  console.log("Hello World2");
  // js engine waits for the promise to resolve
  const val2 = await p2;
  console.log("hello JS2");
  console.log(val2);

  console.log("Hello World");
  // js engine waits for the promise to resolve
  const val1 = await p1;
  console.log("hello JS2");

  console.log(val1);
}
handlePromise1();
