console.log("welcome");

setTimeout(function () {
  console.log("After two second");
}, 2000);

console.log("my name is : " + "Rahul");

let promise = new Promise((resolve, reject) => {
  resolve(55);
});
console.log(promise);

// then and catch method
// promise always run in parallaly

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and i am fulfilled");
    resolve(true);
  });
}, 5000);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am a promise and i am rejected");
    reject(new Error("I am an eoor"));
  });
}, 5000);

console.log(p1);
console.log(p2);

p1.then((value) => {
  console.log(value);
});


p2.catch((error) =>{
  console.log("")
})
