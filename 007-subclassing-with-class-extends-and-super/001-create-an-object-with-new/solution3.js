// subclassing in solution 3
// constructor (pseudoclassical approach)

function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.sayName = function() {
  console.log("I'm " + this.name);
};

userCreator.prototype.increment = function() {
  this.score++;
};

const user1 = new userCreator("Phill", 3);
const user2 = new userCreator("Tim", 4);

user1.sayName(); // I am Phill

function paidUserCreator(paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore);
  // userCreator.apply(this, [paidName, paidScore])
  this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increasedBalance = function() {
  this.accountBalance++;
}

const paidUser1 = new paidUserCreator('Alyssa', 8, 25);

paidUser1.increasedBalance();

paidUser1.sayName();
