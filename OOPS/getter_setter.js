class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toLowerCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}encrypted`;
  }

  set password(value) {
    this._password = value;
  }
}

const rahul = new User("mail@mail.com", "1234");
console.log(rahul.password, rahul.email);
