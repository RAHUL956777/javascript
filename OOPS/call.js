function SetUsername(username) {
  // complex db calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this,username);


  this.email = email;
  this.password = password;
}

const rahul = new createUser("rahul", "new@new.com", "123");
console.log(rahul);
