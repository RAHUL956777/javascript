const user = {
  name: "rahul",
  roll: 1,
  loginCount: 18,
  signedIn: true,

  getUserDetails: function () {
    console.log(`Name is ${this.name} and roll is ${this.roll}`);
    // console.log(`This is ${this}`);
  },
};
// console.log(this)
// console.log(user.name);
// console.log(user.getUserDetails());

// constructor function
const promises = new Promise();


function User (userName,loginCount,isLoggedIn){
  this.userName  = userName;
  this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const user1 = new User("rahul", 18, true);
console.log(user1);

