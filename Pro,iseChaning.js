let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolve after 2 second");
    resolve(59);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    });
  });
  return p2;
})
  .then((value) => {
    console.log("We are done");
    return 2;
  })
  .then((value) => {
    console.log("we are completed");
  });