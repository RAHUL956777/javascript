// we want to make a method that ..the method remove all extra spaces from a string

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "slingshot",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.rahul = function () {
  console.log("Rahul is present in all object");
};

// heroPower.rahul();
myHeroes.rahul();

const User = {
  name: "rahul",
  email: "new@google.com",
};
// inheritance
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvaliable: true,
};

const TASupport = {
  makeNotes: "Notes here",
  fullTime: true,
  __proto__: Teacher, //this is for referencing Teacher
};

// older way
Teacher.__proto__ = User; //this is reference to User when we create a object from teacher we can also access the User objects value

// mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "rahul           ";

String.prototype.trueLength = function () {
  console.log(`True Length is : ${this.trim().length}`);
};

anotherUserName.trueLength();
