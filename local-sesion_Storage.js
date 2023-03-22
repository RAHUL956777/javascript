// localstorage is a web stroage which are not set of server with each request
let key = prompt("Enter key you want to set");
let value = prompt("ENter value you want to set");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red" || key == "blue") {
  localStorage.removeItem(key);
}

if (key == 0) {
  localStorage.clear();
}

// in session storage if we left the tab or exit from the tab then it delete all the data that it was holding on

sessionStorage.getItem("name");
sessionStorage.clear();
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "Rahul");



