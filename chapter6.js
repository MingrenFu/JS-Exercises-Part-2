// Chapter 6 Exercise

// Adding character experience: Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
// TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points `;
  }
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

// Call the describe function
console.log(aurora.describe());


// Modeling a dog: Complete the following program to add the dog object definition.
// TODO: create the dog object here
const dog = {};
dog.name = 'Fang';
dog.species = 'boarhound';
dog.bark = () => {return "Grrr! Grrr!"};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//Modeling a bank account: Write a program that creates an account object
const account = {};
account.name = 'Alex';
account.balance = 0;
account.credit = (amount) => {
  account.balance = account.balance + amount;
}
account.describe = () => {
  console.log (`Name: ${account.name}, Balance: ${account.balance}`);
}

account.describe ();
account.credit (250);
account.credit (-80);
account.describe ();
