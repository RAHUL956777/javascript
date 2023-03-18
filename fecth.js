let p = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=your_api_key"
);

// here 2 .tehn() used because 1st then used for get status of endpoint and it's fulfiled or not means ok method and second then is use for showing the
p.then((value1) => {
  console.log(value1.status);
  console.log(value1.ok);
  console.log(value1.headers);
  return value1.json();
}).then((value2) => {
  console.log(value2);
});
