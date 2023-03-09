// ushing async await you can control the flow of execution
async function rahul() {
  let kolkataWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 degree");
    }, 4000);
  });

  let chennaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("35 degree");
    }, 6000);
  });

  //   kolkataWeather.then(alert);
  //   chennaiWeather.then(alert);

  console.log("Please wait while we faching kolkat's weather....");
  let kolW = await kolkataWeather;
  console.log("feacthed kolkat's weather" + kolW);

  console.log("Please wait while we faching chennai's weather....");
  let chenW = await chennaiWeather;
  console.log("featched chennai's weather" + chenW);

  return [kolW, chenW];
}

let p = rahul();
// console.log(p);   //it will return promise every time
p.then((value) => {
  console.log(value);
});
