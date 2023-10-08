// creating promises
const promiseOne = new Promise((resolve, reject) => {
  // async calls
  // bd calls , cryptography,network related
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});

// promise 2

new promiseOne((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task2 is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

// third promise
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Rahul", email: "dasr16583@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// fourth promise
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "rahul", password: "123" });
    } else {
      reject("error something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or reject");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "rahul", password: "123" });
    } else {
      reject("error something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


// ushing async await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// ushing then
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


