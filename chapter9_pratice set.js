// Write a program to load a javascript file in a browser ushing promises. use then() to display an alert when the load is complete

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + "Done sucess");
    };
    document.head.append(script);
  });
};

let a = loadScript("https://google.com");
a.then((value) => {
  console.log(value);
});
// solve 1 st problem ushing async await

const main = async () => {
  let a = loadScript("https://google.com");
  console.log(a);
};

main();

// generate a promise which rejects after 3 second use an async/await to get it's value. use a try catch to handle it's error

let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This is not acceptable"));
    }, 3000);
  });
};

let b = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (err) {
    console.log(err);
  }
};

a();
