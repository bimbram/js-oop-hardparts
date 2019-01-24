// Subclassing in solution 2:
function userCreator(name, score) { // this function is called 'factory function'
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// Singleton: a single copy of the function
userFunctions = {
  sayName: function() {
    console.log("I'm " + this.name);
  }
  increment: function() {
    this.score++;
  }
}

const user1 = userCreator('Phil', 5);

user1.sayName(); // "I am Phill"

//After
function paidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function() {
    this.accountBalance++;
  }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator('Alyssa', 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName(); // I'm Alyssa
