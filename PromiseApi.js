let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
    // reject(new Error("Error"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});

// p1.then((value) => {
//       console.log(value);
//     });

//     p2.then((value) => {
//           console.log(value);
//         });

//         p3.then((value) => {
//               console.log(value);
//             });

// we get the all value after all promises executionu

let promise_all1 = Promise.all([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});

// if we get an error the promise.all will not working then we use Promise.allSeltted

let promise_all2 = Promise.allSettled([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});

// Promise.race() method used for getting the first execution value from all promises if the valus show error it will throw error

let promise_all3 = Promise.race([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});

//Promise.any() wait for the first promise to fullfilled(not reject) and it's result becomes outcome..throws aggreate error if all the promise dre rejected 

let promise_all4 = Promise.any([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});