// class kwyword introduce into es6

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}@1234`;
  }

  changeUsername() {
    return `${this.userName.toUpperCase()} `;
  }
}

const rahul = new User("rahul", "gmail@email.com", "abc");
console.log(rahul.encryptPassword(), rahul.changeUsername());


// behind the sceen
function User1(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function () {
    return `${this.password}@1234`;
}

User1.prototype.changeUsername = function () {
    return `${this.userName.toUpperCase()} `;
}

const rahul1 = new User1("rahul", "gmail", "abc");
console.log(rahul1.encryptPassword(), rahul1.changeUsername());