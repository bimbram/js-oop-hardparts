function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function() {
  console.log("I'm " + this.name);
}

userCreator.prototype.increment = function() {
  this.scope++;
}

const user1 = new userCreator('Phill', 2);
const user2 = new userCreator('Tim', 4);

user1.sayName();

function paidUserCreator(paidName, paidScore, accountBalance) {
    userCreator.call(this, paidName, paidScore);
    // userCreator.apply(this, [paidName, paidScore])
    this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(userCreate.prototype);
paidUserCreator.prototype.increaseBalance = function() {
  this.accountBalance++;
}

const paidUser1 = new paidUserCreator('Alyssa', 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName() // I'm Alyssa
