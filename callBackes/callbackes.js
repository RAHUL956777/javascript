// syncronous programming
let a = prompt("What is your name?");
let b = prompt("what is your age?");
let c = prompt("what is your faburit color?");
console.log(a + " is " + b + " Year old and has " + c + " faburit color.");

// Asyncronous function
console.log("start");
setTimeout(function () {
  console.log("Hey I am good");
}, 3000);
console.log("end");