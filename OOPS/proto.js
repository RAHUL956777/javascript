function multiplayByFive(num) {
  return num * 5;
}

multiplayByFive.power = 2;

console.log(multiplayByFive(5));
console.log(multiplayByFive.power);
console.log(multiplayByFive.prototype);


function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increaseScore = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Name is ${this.userName} and score is ${this.score}`);
}

const user1 = new createUser("rahul",18);
const user2 = new createUser("rohit",20);

