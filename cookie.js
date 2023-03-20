// cookie is a small storage that store some information about user data
console.log(document.cookie);
document.cookie = "name=rahul711315";
document.cookie = "name=rahul711315264";
document.cookie = "name=rahul711315646874";

let key = prompt("enter your key");
let value = prompt("Enter your value");
let c = document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// after encode a cookie ushing encodeuricomponent we need to decode it after that
console.log(c);
