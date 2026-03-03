const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P1 Success"), 3000);
  setTimeout(() => reject("P1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Success"), 1000);
  setTimeout(() => reject("P2 Fail"), 5000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P3 Success"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("promise.all : ", res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("promise.allSettled : ", res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("promise.race :", res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("promise.any :", res);
  })
  .catch((err) => {
    console.log(err);
  });
